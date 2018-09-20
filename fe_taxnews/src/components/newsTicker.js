import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

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
        console.log(innerItem);
        this.tickerNewsList.push(innerItem.title);
      }
      this.setState({
        tickerData: this.tickerNewsList
      });
    }
  }
  render() {
    console.log("Home data " + JSON.stringify(this.state.tickerData));
    if (_.isEmpty(this.tickerNewsList)) {
      return null;
    } else {
      return (
        <div className="ticker-wrap container">
          <div className="ticker">
            {this.state.tickerData.map((data, index1) => (
              <div className="ticker__item" key={index1}>
                {data}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default NewsTicker;
