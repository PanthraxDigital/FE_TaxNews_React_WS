import React from "react";

class SiteDown extends React.Component {
  render() {
    return (
      <div>
        <h3>
          {/* Site is down due to heavy user load. We will be resuming shortly. */}
          Site is down for the maintenance. We will be resuming shortly.
        </h3>
        <br />
        <h4> Thank you for all your love and support .</h4>
      </div>
    );
  }
}

export default SiteDown;
