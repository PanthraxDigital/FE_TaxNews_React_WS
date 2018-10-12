import React, { Component } from "react";
import { DateFormat } from "../commonUtility";
import NewsLetterSubscriber from "./newsLetterSubscriber";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
  }

  addNewSubscriber(e) {}

  render() {
    return (
      <div className="col-md-3 side-bar">
        <NewsLetterSubscriber />
        {/* <div className="sign_up text-center">
          <h3>Sign Up for Newsletter</h3>
          <p className="sign">Sign up to receive our free newsletters!</p>
          <div>
            <input type="text" className="text" placeholder="Email Address" />
            <input
              type="submit"
              style={{ margin: "0 auto", marginTop: "10px" }}
              onClick={this.addNewSubscriber}
            />
          </div>
          <p className="spam">We do not spam. We value your privacy!</p>
        </div> */}

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
                  {data.title} <a href="#">Read More</a>
                </p>
              </div>
            ))}
          </div>
          <a className="more" href="#">
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
      </div>
    );
  }
}

export default Sidebar;
