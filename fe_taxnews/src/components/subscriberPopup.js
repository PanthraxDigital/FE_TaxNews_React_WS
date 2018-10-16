import React from "react";
import NewsLetterSubscriber from "./newsLetterSubscriber";
import { setCookie } from "../commonUtility";

class SubscriberPopup extends React.Component {
  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
  }
  closePopup(e) {
    this.props.closeSubscriberPopup();
  }

  componentDidMount() {
    // set the cookie value = 1, which will NOT show the popup untill session expire
    setCookie("tx_popup", 1, 1);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="header-left">
            <div className="logo" style={{fontFamily:'georgia', textTransform:'uppercase', fontSize:'24px'}}>
              <h2>
                TaxKnowledge
                <span>.in</span>
              </h2>
              <h5>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",
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
          <div style={{ float: "right" }}>
            <strong
              onClick={this.closePopup}
              style={{ padding: "20px", cursor: "pointer" }}
            >
              close
            </strong>
          </div>
          <br />
          <br />
          <br />
          <NewsLetterSubscriber />
        </div>
      </div>
    );
  }
}

export default SubscriberPopup;
