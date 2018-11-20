import React, { Component } from "react";
import { DateFormat } from "../commonUtility";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { Link } from "react-router-dom";
import { TelegramIcon, WhatsappIcon } from "react-share";
import axios from "axios";
import { URL_X } from "../networkUtility";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
  }

  addNewSubscriber(e) {}

  componentDidMount() {
    this.fetchMediaLink();
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

        {this.state.data != null
          ? this.state.data.map(list => console.log("media name " + list.media))
          : null}

        <div>
          <div style={{ marginTop: "20px", display: "none" }}>
            <a href="#">
              <img src="https://via.placeholder.com/250x200" />
              <div className="clearfix" />
            </a>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }

  fetchMediaLink() {
    axios
      .get(URL_X)
      .then(result => {
        console.log("share media" + JSON.stringify(result));
        this.setState({
          data: result
        });
      })
      .then(error => {
        console.log("error " + error);
      });
  }
}

export default Sidebar;

//  <table className="mediaGroup">
//       <tbody>
//         <tr>
//           <td className="mediaGroupIcon">
//             <WhatsappIcon size={50} round />{" "}
//           </td>
//           <td className="mediaGroupText">
//             {" "}
//             <a href="">Join WhatsApp Group</a>
//           </td>
//         </tr>
//         <tr>
//           <td className="mediaGroupIcon">
//             <TelegramIcon size={50} round />{" "}
//           </td>
//           <td className="mediaGroupText">
//             <a href="">Join Telegram Channel</a>
//           </td>
//         </tr>
//       </tbody>
//     </table>
