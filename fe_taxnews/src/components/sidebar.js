import React, { Component } from "react";
import { DateFormat } from "../commonUtility";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { Link } from "react-router-dom";
import { TelegramIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import { URL_GROUP_JOIN } from "../networkUtility";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupJoinList: []
    };
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
  }

  addNewSubscriber(e) {}

  componentDidMount() {
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

  render() {
    return (
      <div className="col-md-3 side-bar">
        <NewsLetterSubscriber />

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
      </div>
    );
  }
}

export default Sidebar;

{
  /* <table className="mediaGroup">
          <tbody>
            <tr>
              <td className="mediaGroupIcon">
                <WhatsappIcon size={50} round />{" "}
              </td>
              <td className="mediaGroupText">
                {" "}
                <a href="">Join WhatsApp Group</a>
              </td>
            </tr>
            <tr>
              <td className="mediaGroupIcon">
                <TelegramIcon size={50} round />{" "}
              </td>
              <td className="mediaGroupText">
                <a href="">Join Telegram Channel</a>
              </td>
            </tr>
          </tbody>
        </table> */
}

{
  /* <tr>
<td className="mediaGroupIcon">
  <WhatsappIcon size={50} round />{" "}
</td>
<td className="mediaGroupText">
  {" "}
  <a href="">Join WhatsApp Group</a>
</td>
</tr>
<tr>
<td className="mediaGroupIcon">
  <TelegramIcon size={50} round />{" "}
</td>
<td className="mediaGroupText">
  <a href="">Join Telegram Channel</a>
</td>
</tr> */
}
