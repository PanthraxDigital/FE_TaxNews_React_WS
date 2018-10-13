import React from "react";
import NewsLetterSubscriber from "./newsLetterSubscriber";

class SubscriberPopup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="header-left">
            <div className="logo">
              <h1>
                TaxKnowledge
                <span>.in</span>
              </h1>
              <h5>
                <div style={{ fontFamily: "sans-serif", fontSize: "18px", marginBottom:"10px" }}>
                  <span>T</span>
                  he <span>P</span>
                  ower of <span>K</span>
                  nowledge
                </div>
              </h5>
            </div>
          </div>
          <div style={{float:"right"}}>
            <button>close</button>
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
