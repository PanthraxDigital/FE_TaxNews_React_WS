import React, { Component } from "react";
import { DateFormat } from "../commonUtility";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { Link } from "react-router-dom";
import { TelegramIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import { URL_GROUP_JOIN } from "../networkUtility";
import { URL_VIDEO_LIST } from "../networkUtility";
import { showAds1 } from "../bitvertiser/ads1";
import AdSense from "react-adsense";
// import { StickyContainer, Sticky } from "react-sticky";
import Sticky from "react-stickynode";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupJoinList: [],
      videoList: []
    };
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  addNewSubscriber(e) {}

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    axios
      .get(URL_GROUP_JOIN)
      .then(_result => {
        this.setState({
          groupJoinList: _result.data.result
        });
      })
      .catch(error => {
        console.log("error " + error);
      });

    axios
      .get(URL_VIDEO_LIST)
      .then(_result => {
        this.setState({
          videoList: _result.data.result
        });
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 500) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 500) {
      console.log("not locked");
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-3 side-bar">
          <div>
            <AdSense.Google
              client="ca-pub-4354135056247821"
              slot="5578767845"
              style={{
                width: 250,
                height: 250,
                float: "left",
                marginTop: "1em"
              }}
              format=""
              responsive="true"
            />
          </div>
          <br />

          <div className="clearfix" />
          <div>
            <div style={{ display: "none" }}>
              <a href="#">
                <img
                  style={{
                    width: "200px",
                    marginTop: "0px",
                    marginBottom: "10px"
                  }}
                  src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png"
                />
                <div className="clearfix" />
              </a>
            </div>
          </div>
          <div className="clearfix" />
          <div className="popular-news">
            {this.state.videoList.map((vidData, index) => (
              <div className="popular-grid" key={index}>
                <p style={{ padding: "5px 0px" }}>{vidData.VideoTitle}</p>
                <div
                  class="video-container"
                  dangerouslySetInnerHTML={{ __html: vidData.EmbedVideoLink }}
                />
              </div>
            ))}
          </div>
          <a className="more" href="https://www.youtube.com/channel/UC9BNHuiceHP6brh1P4aSY-A" target="_blank">
            Watch More +
          </a>

          <div className="popular">
            <div className="main-title-head">
              <h5>GENERAL</h5>
              <h4>TAXATION</h4>
              <div className="clearfix" />
            </div>
            <div className="popular-news">
              {this.props.sideBarResult.map((data, index) => (
                <div className="popular-grid" key={index}>
                  <i>{DateFormat(data.articleDate)}</i>
                  <p>
                    {data.title}
                    <Link to={`/generalTax/${data._id}`}> Read More</Link>
                    
                  </p>
                </div>
              ))}
            </div>
            <a className="more" href="#" style={{ display: "none" }}>
              More +
            </a>
          </div>
          <NewsLetterSubscriber />
          <div>
            <div style={{ marginTop: "20px", display: "none" }}>
              <a href="#">
                <img src="https://via.placeholder.com/250x200" />
                <div className="clearfix" />
              </a>
            </div>
          </div>
          <div className="clearfix" />

          <h4 style={{ textAlign: "center" }}>For Latest Updates</h4>
          <table className="mediaGroup">
            <tbody>
              {this.state.groupJoinList.length > 0
                ? this.state.groupJoinList.map(function(list, index) {
                    switch (list.media) {
                      case "0":
                        return (
                          <tr key={index}>
                            <td className="mediaGroupIcon">
                              <WhatsappIcon size={40} round />{" "}
                            </td>
                            <td className="mediaGroupText">
                              {" "}
                              <a href={list.link} target="_blank">
                                Join WhatsApp Group
                              </a>
                            </td>
                          </tr>
                        );

                      case "1":
                        return (
                          <tr key={index}>
                            <td className="mediaGroupIcon">
                              <TelegramIcon size={40} round />{" "}
                            </td>
                            <td className="mediaGroupText">
                              <a target="_blank" href={list.link}>
                                Join Telegram Channel
                              </a>
                            </td>
                          </tr>
                        );
                    }
                  })
                : null}
            </tbody>
          </table>
          {/* <div id="ntv_1986077" /> */}

          <AdSense.Google
            client="ca-pub-4354135056247821"
            slot="5578767845"
            style={{
              width: 250,
              height: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            format=""
            responsive="true"
          />

          {/* <div
            style={{
              background: "red",
              right: "0",
              width: "100%",
              height: "100%",
              float: "right",
              zIndex: 9999,
              position: this.state.scrollingLock ? "fixed" : "relative"
            }}
          >
            <span style={{ color: "white" }}> My Content </span>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
