import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getCategory } from "../commonUtility";

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
    return (
      <div className="ticker-wrap container">
        <div className="ticker">
          {this.state.tickerData.map((data, index1) => (
            <div className="ticker__item" key={index1}>
              <Link
                to={`${getCategory(parseInt(data.category))}/${data.id}`}
                key={index1}
              >
                {data.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsTicker;
