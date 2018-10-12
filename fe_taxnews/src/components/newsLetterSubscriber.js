import React from "react";

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
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            action="https://taxknowledge.us19.list-manage.com/subscribe/post?u=a4e722edd8d0243c79091fed4&amp;id=86af928437"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            readOnly
          >
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
                value={this.state.value}
                onChange={this.handleChange}
              />

              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                {/* <input
                  type="text"
                  name="b_a4e722edd8d0243c79091fed4_86af928437"
                  tabIndex="-1"
                  defaultValue=""
                /> */}
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsletterSubscriber;
