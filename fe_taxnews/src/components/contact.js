import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div
          className="logo"
          style={{
            fontFamily: "georgia",
            textTransform: "none",
            fontSize: "24px"
          }}
        >
          <h2>Contact Taxknowledge Team</h2>
        </div>
        <hr />
        <div className="footerLink">
          <p>
            You are requested to drop a mail on{" "}
            <a href="mailto:info@taxknowledge.in">info@taxknowledge.in </a>
            for any inquiry.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
