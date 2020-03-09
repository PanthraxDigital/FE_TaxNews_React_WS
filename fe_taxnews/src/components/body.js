import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL_SEARCH } from "../networkUtility";
import { DateFormat, getCategoryId, getCategory } from "../commonUtility";
import AdSense from "react-adsense";

class body extends Component {
  constructor(props) {
    super(props);
    this.tickerNewsList = [];
    this.state = {
      homeData: [],
      fromDeskData: [],
      tickerData: [],
      isLoading: true,
      searchResultValue: []
    };
  }

  componentDidMount() {
    this.setState({
      fromDeskData: this.props.fromDeskResult,
      homeData: this.props.homeDataResult,
      isLoading: false,
      tickerData: this.tickerNewsList
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userSearchValue != undefined) {
      axios
        .get(`${URL_SEARCH}${nextProps.userSearchValue}`)
        .then(_result => {
          this.setState({
            searchResultValue: _result.data.searchResult
          });
        })
        .catch(error => {
          console.log("error " + error);
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="total-news">
          <h3>Loading Please Wait...</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="total-news">
            <div className="live-market">
              <h3>
                <span>From</span> The Desk
              </h3>
              <div className="bull">
                <Link to="#">
                  <img
                    src={
                      this.state.fromDeskData[0].hasOwnProperty("uploadImage")
                        ? this.state.fromDeskData[0].uploadImage.url
                        : this.state.fromDeskData[0].imageLink != null
                        ? this.state.fromDeskData[0].imageLink
                        : ""
                    }
                    alt=""
                  />
                </Link>
              </div>

              {this.state.fromDeskData.map((dataVal, _index) => {
                return (
                  <div className="bull-text" key={_index}>
                    <ul>
                      <li style={{ listStyle: "none" }}>
                        <Link to={`/from-desk/${dataVal._id}`}>
                          {dataVal.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              }, this)}
              <div className="clearfix" />
            </div>
            <div className="posts">
              <div className="left-posts">
                <div className="Articles">
                  {this.state.homeData.map(function(data, index) {
                    let index2 = index + 1;
                    return (
                      <React.Fragment>
                        <div key={index}>
                          <AdSense.Google
                            client="ca-pub-4354135056247821"
                            slot="1483284168"
                            format="auto"
                            responsive="true"
                          />
                          <div className="main-title-head">
                            <h3>{getArticleTitle(index + 1)}</h3>
                            <Link to={`${getArticleURL(index + 1)}`}>
                              More +
                            </Link>
                            <div className="clearfix" />
                          </div>
                          <div>
                            {data.map(function(dataResult, index_) {
                              return (
                                <React.Fragment>
                                  <div className="world-news-grid" key={index_}>
                                    <img
                                      src={
                                        dataResult.hasOwnProperty("uploadImage")
                                          ? dataResult.uploadImage.url
                                          : dataResult.imageLink != null
                                          ? dataResult.imageLink
                                          : ""
                                      }
                                    />
                                    <Link
                                      style={{ color: "black" }}
                                      to={`${getArticleURL(index + 1)}/${
                                        dataResult._id
                                      }`}
                                    >
                                      {dataResult.title}
                                    </Link>
                                    <p>
                                      {String(dataResult.subTitle).substring(
                                        0,
                                        200
                                      ) + " ..."}
                                    </p>
                                    <Link
                                      to={`${getArticleURL(index + 1)}/${
                                        dataResult._id
                                      }`}
                                    >
                                      Read More
                                    </Link>
                                  </div>
                                </React.Fragment>
                              );
                            }, this)}
                            <div className="clearfix" />
                          </div>
                        </div>
                        <br />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="right-posts" style={{ display: "none" }}>
                <div className="editorial">
                  <h3>Advertisment</h3>
                </div>
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
                <br />
                <div className="editor">
                  <img src="https://via.placeholder.com/230x130" />
                </div>
              </div>
              {/* <div className="clearfix" /> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

// we are showing 3 headers
function getArticleTitle(_index) {
  switch (_index) {
    case 1:
      return "Top Stories";
    case 2:
      return "Income Tax";
    case 3:
      return "GST";
  }
}

// corresponding url of the 3 header article
function getArticleURL(_index) {
  switch (_index) {
    case 0:
      return "/from-desk";
    case 1:
      return "/top-stories";
    case 2:
      return "/income-tax";
    case 3:
      return "/gst";
  }
}

//Production
function mapObjectIdWithMenuProd(_menuObjectId) {
  switch (_menuObjectId) {
    case "5c0da7b258920b125efbed47":
      return "/from-desk";
    case "5c0da7c858920b125efbed48":
      return "/top-stories";
    case "5c0da7dc58920b125efbed49":
      return "/income-tax";
    case "5c0da7f758920b125efbed4a":
      return "/gst";
    case "5c0da81358920b125efbed4b":
      return "/vat-cst";
    case "5c0da82958920b125efbed4c":
      return "/excise";
    case "5c0da83a58920b125efbed4d":
      return "/custom";
    case "5c0da8bd58920b125efbed4e":
      return "/nbfc-rbi";
    case "5c0da8cb58920b125efbed4f":
      return "/sebi";
    case "5c0da8e658920b125efbed50":
      return "/roc-company-law";
    case "5c0da90358920b125efbed51":
      return "/icai";
    case "5c0da92b58920b125efbed52":
      return "/finance-budget";
    case "5c0da94058920b125efbed53":
      return "/generalTax";
    case "5c0da95f58920b125efbed54":
      return "/others";
  }
}

//Development
function mapObjectIdWithMenuDev(_menuObjectId) {
  switch (_menuObjectId) {
    case "5c09f2d2ad83e006a5cbd25d":
      return "/from-desk";
    case "5c07dd78cc1f9907914e002e":
      return "/top-stories";
    case "5c07ddafcc1f9907914e002f":
      return "/income-tax";
    case "5c07ddbccc1f9907914e0030":
      return "/gst";
    case "5c07ddd0cc1f9907914e0031":
      return "/vat-cst";
    case "5c07ddf1cc1f9907914e0032":
      return "/excise";
    case "5c07ddfccc1f9907914e0033":
      return "/custom";
    case "5c07de0acc1f9907914e0034":
      return "/nbfc-rbi";
    case "5c07de14cc1f9907914e0035":
      return "/sebi";
    case "5c07de22cc1f9907914e0036":
      return "/roc-company-law";
    case "5c07de35cc1f9907914e0037":
      return "/icai";
    case "5c09f46337906706d192c052":
      return "/finance-budget";
    case "5c09f47a37906706d192c053":
      return "/generalTax";
    case "5c09f48837906706d192c054":
      return "/others";
  }
}

export default body;
