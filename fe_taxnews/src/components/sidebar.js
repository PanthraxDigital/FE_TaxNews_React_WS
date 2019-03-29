import React, { Component } from "react";
import { DateFormat } from "../commonUtility";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { Link } from "react-router-dom";
import { TelegramIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import { URL_GROUP_JOIN } from "../networkUtility";
import { showAds1 } from "../bitvertiser/ads1";
import AdSense from "react-adsense";
// import { StickyContainer, Sticky } from "react-sticky";
import Sticky from "react-stickynode";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupJoinList: [],
      scrollingLock: false
    };
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  addNewSubscriber(e) {}

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    // show bitvertiser ads-1
    // (function(d) {
    //   var params = {
    //     bvwidgetid: "ntv_1986077",
    //     bvlinksownid: 1986077,
    //     rows: 2,
    //     cols: 1,
    //     textpos: "below",
    //     imagewidth: 200,
    //     mobilecols: 1,
    //     cb: new Date().getTime()
    //   };
    //   params.bvwidgetid = "ntv_1986077" + params.cb;
    //   d.getElementById("ntv_1986077").id = params.bvwidgetid;
    //   var qs = Object.keys(params)
    //     .reduce(function(a, k) {
    //       a.push(k + "=" + encodeURIComponent(params[k]));
    //       return a;
    //     }, [])
    //     .join(String.fromCharCode(38));
    //   var s = d.createElement("script");
    //   s.type = "text/javascript";
    //   s.async = true;
    //   var p = "https:" == document.location.protocol ? "https" : "http";
    //   s.src =
    //     p +
    //     "://bvadtgs.scdn1.secure.raxcdn.com/bidvertiser/tags/active/bdvws.js?" +
    //     qs;
    //   d.getElementById(params.bvwidgetid).appendChild(s);
    // })(document);

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
          <AdSense.Google
            client="ca-pub-4652165289391769"
            slot="4114300139"
            style={{
              width: "240px",
              height: "200px",
              marginTop: "10px"
            }}
            layout="in-article"
            format="fluid"
            availableWidth = "250px"
            responsive="true"
          />
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
                    {/* <a href="#">Read More</a> */}
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

          <Sticky enabled={true} top={50} bottomBoundary={1200}>
            <AdSense.Google
              client="ca-pub-4652165289391769"
              slot="5438143602"
              style={{
                width: "250px",
                height: "250px",
                float: "right"
              }}
              format=""
            />
          </Sticky>
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

{
  /* <AdSense.Google
                  client="ca-pub-4652165289391769"
                  slot="5438143602"
                  style={{
                    width: "250px",
                    height: "600px",
                    float: "right",
                    background: "red"
                  }}
                  format=""
                /> */
}
