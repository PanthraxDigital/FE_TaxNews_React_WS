import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getCategory } from "../commonUtility";
import styled from "styled-components";

class NewsTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerData: []
    };
    this.tickerNewsList = [];
  }
  componentDidMount() {
    let homeArticlesCount = this.props.homeDataResult.length;
    for (let index = 0; index < homeArticlesCount; index++) {
      const articleItem = this.props.homeDataResult[index];

      for (let _index = 0; _index < articleItem.length; _index++) {
        const innerItem = articleItem[_index];
        const tickerInfo = {
          title: `${innerItem.title}`,
          id: innerItem._id,
          category: innerItem.category
        };
        this.tickerNewsList.push(tickerInfo);
      }
      this.setState({
        tickerData: this.tickerNewsList
      });
    }
  }
  render() {
    const TickerWrap = styled.div`
      width: 8%;
      overflow: hidden;
      padding-right: 0px;
      height: 4rem;
      background-color: white;
      padding-left: 91%;
      box-sizing: content-box;
    `;

    const Ticker = styled.div`
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      white-space: nowrap;
      padding-right: 100%;
      box-sizing: content-box;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: ticker;
      animation-name: ticker;
      -webkit-animation-duration: 150s;
      animation-duration: 150s;
    `;

    const TickerItem = styled.div`
      display: inline-block;
      padding: 0 2rem;
      font-size: 2rem;
      color: #cf0000;
      font-family: "Times New Roman", Times, serif;
    `;

    return (
      <TickerWrap className="container">
        <Ticker>
          {this.state.tickerData.map((data, index1) => (
            <TickerItem key={index1}>
              <Link
                to={`${getCategory(parseInt(data.category))}/${data.id}`}
                key={index1}
              >
                <span>{data.title}</span>
              </Link>
              
            </TickerItem>
          ))}
        </Ticker>
      </TickerWrap>
    );
  }
}

export default NewsTicker;
