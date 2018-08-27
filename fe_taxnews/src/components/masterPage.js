import React, { Component } from "react";
import topStoriesData from "./masterArticleList.json";
import incomeTaxData from "./incomeTax.json";
import { Link } from "react-router-dom";

//Navigation of all the Menu
//var URL = "";
class MasterPage extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.location.pathname;
    //URL = this.props.location.pathname;
  }

  state = {
    masterListData: []
  };

  componentDidMount() {
    // fetch the data as per the URL
    // mean while will mock the json

    switch (this.url) {
      case "/top-stories":
        this.setState({
          masterListData: topStoriesData
        });

        break;
      case "/income-tax":
        this.setState({
          masterListData: incomeTaxData
        });
        break;
    }
  }

  render() {
    return (
      <div className="col-md-9 total-news">
        <div className="content">
          <div className="grids">
            {this.state.masterListData.map(function(data) {
              return (
                <div className="grid box">
                  <div className="grid-header">
                    <Link className="gotosingle" to={this.url + "/" + data._id}>
                      {data.title}
                    </Link>
                    <ul>
                      <li>
                        <span>
                          posted by {data.author.name.first}{" "}
                          {data.author.name.last}
                        </span>
                        <span>
                          {" "}
                          on{" "}
                          {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          }).format(new Date(data.articleDate))}
                        </span>
                      </li>
                      {/* <li>
                        <a href="#">5000 views</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="grid-img-content">
                    <a href="#">
                      <img src="images/news-placeholder.png" className="blog" />
                    </a>
                    <p>{data.subTitle}</p>
                    <div className="clearfix" />
                  </div>
                  <div className="comments">
                    <div>
                      <a className="readmore" href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            }, this)}
          </div>
        </div>
      </div>
    );
  }
}

export default MasterPage;