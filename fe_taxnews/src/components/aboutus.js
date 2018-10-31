import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    window.scrollTo(0,0);
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
          <h2>About Taxknowledge</h2>
        </div>
        <hr />
        <div className="footerLink">
          <p>
            Taxknowledge provides news and latest updates related to tax laws
            and other law in India. It is online portal which provides news,
            articles, case laws, Circular, Notification, press release,
            clarification etc regarding various tax laws and other laws in
            India. Our endeavor is to spread knowledge amongst people about
            latest development in tax laws &amp; other laws.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
