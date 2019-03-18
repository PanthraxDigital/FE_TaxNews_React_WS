import React from "react";
import AdSense from "react-adsense";

class NewsletterSubscriber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <link
            href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
          <div
            id="mc_embed_signup"
            className="sign_up text-center"
            style={{ padding: "5px" }}
          >
            <AdSense.Google
              client="ca-pub-4652165289391769"
              slot="4114300139"
              style={{
                width: "240px",
                height: "225px",
                float: "right",
                marginBottom: "15px"
              }}
              format=""
            />
            <form
              action="https://taxknowledge.us19.list-manage.com/subscribe/post?u=a4e722edd8d0243c79091fed4&amp;id=86af928437"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
            >
              <div id="mc_embed_signup_scroll">
                <h3>Sign Up for Newsletter</h3>
                <p className="sign" htmlFor="mce-EMAIL">
                  Sign up to receive our free newsletters!
                </p>
                <input
                  type="email"
                  style={{ width: "100%" }}
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Email Address"
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                />

                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                />
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    readOnly="true"
                  />
                </div>
                <p className="spam">We do not spam. We value your privacy!</p>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewsletterSubscriber;
