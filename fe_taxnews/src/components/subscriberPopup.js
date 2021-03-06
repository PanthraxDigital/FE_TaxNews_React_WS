import React from "react";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { setCookie, getCookie } from "../commonUtility";
import AdSense from "react-adsense";
import { TelegramIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import { URL_GROUP_JOIN } from "../networkUtility";

class SubscriberPopup extends React.Component {
  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
    this.state = {
      groupJoinList: []
    };
  }
  closePopup(e) {
    this.props.closeSubscriberPopup();
  }

  componentDidMount() {
    // set the cookie value = 1, which will NOT show the popup untill session expire

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

    // if (getCookie("tx_popup") == 0) {
    //   axios
    //     .get(URL_GROUP_JOIN)
    //     .then(_result => {
    //       this.setState({
    //         groupJoinList: _result.data.result
    //       });
    //     })
    //     .catch(error => {
    //       console.log("error " + error);
    //     });
    // }
    // setCookie("tx_popup", 1, 1);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <div>
              <strong
                onClick={this.closePopup}
                style={{
                  padding: "0px",
                  cursor: "pointer",
                  float: "right",
                  background: "white",
                  color: "black"
                }}
              >
                close
              </strong>
            </div>
            <div style={{ display: "none" }}>
              <div
                className="logo"
                style={{
                  fontFamily: "georgia",
                  textTransform: "uppercase",
                  fontSize: "21px"
                }}
              >
                <h3>
                  TaxKnowledge
                  <span>.in</span>
                </h3>
                <h5>
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                      marginBottom: "10px"
                    }}
                  >
                    <span>T</span>
                    he <span>P</span>
                    ower of <span>K</span>
                    nowledge
                  </div>
                </h5>
              </div>
            </div>
          </div>
          <AdSense.Google
            client="ca-pub-4354135056247821"
            slot="5578767845"
            layout="display"
            format="auto"
            responsive="true"
          />{" "}
          <br />
          <table className="mediaGroup" style={{width:'100%'}}>
            <tbody>
              <tr>
                {this.state.groupJoinList.length > 0
                  ? this.state.groupJoinList.map(function(list, index) {
                      switch (list.media) {
                        case "0":
                          return (
                            <td key={index}>
                              <table style={{align:'center'}}>
                                <tr>
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
                              </table>
                            </td>
                          );

                        case "1":
                          return (
                            
                            <td key={index}>
                              <table style={{align:'center'}}>
                                <tr>
                                  <td className="mediaGroupIcon">
                                    <TelegramIcon size={40} round />{" "}
                                  </td>
                                  <td className="mediaGroupText">
                                    <a target="_blank" href={list.link}>
                                      Join Telegram Channel
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          );
                      }
                    })
                  : null}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SubscriberPopup;
//slot="7853251398"

{
  /* <table class="table">
            <tr className="mediaGroup">
              {this.state.groupJoinList.length > 0
                ? this.state.groupJoinList.map(function(list, index) {
                    switch (list.media) {
                      case "0":
                        return (
                          <td key={index} style={{ padding: "5px" }}>
                            <table>
                              <tr>
                                <td style={{ padding: "2px" }}>
                                  <WhatsappIcon size={20} round />{" "}
                                </td>
                                <td
                                  className="mediaGroupText"
                                  style={{ verticalAlign: "middle" }}
                                >
                                  {" "}
                                  <a href={list.link} target="_blank">
                                    Join WhatsApp Group
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        );

                      case "1":
                        return (
                          <td key={index} style={{ padding: "5px" }}>
                            <table>
                              <tr>
                                <td style={{ padding: "2px" }}>
                                  <TelegramIcon size={25} round />{" "}
                                </td>
                                <td
                                  className="mediaGroupText"
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <a target="_blank" href={list.link}>
                                    Join Telegram Channel
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        );
                    }
                  })
                : null}
            </tr>
          </table>
          <NewsLetterSubscriber /> */
}
