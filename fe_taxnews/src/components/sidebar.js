import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super();
    this.addNewSubscriber = this.addNewSubscriber.bind(this);
  }

  addNewSubscriber(e) {
    alert("hi");
  }

  render() {
    return (
      <div className="col-md-3 side-bar">
        <div className="sign_up text-center">
          <h3>Sign Up for Newsletter</h3>
          <p className="sign">Sign up to receive our free newsletters!</p>
          <div>
            <input type="text" className="text" value="Email Address" />
            <input
              type="submit"
              style={{ margin: "0 auto", marginTop: "10px" }}
              onClick={this.addNewSubscriber}
            />
          </div>
          <p className="spam">We do not spam. We value your privacy!</p>
        </div>
        <div className="clearfix" />
        <div>
          <div style={{ width: "120px", height: "50px", marginTop: "25px" }}>
            <a href="#">
              <img src="https://farm2.staticflickr.com/1843/42779813950_61fdd81010_t.jpg" />
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
            <div className="popular-grid">
              <i>Sept 02nd 2018 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div className="popular-grid">
              <i>Sept 02nd 2018 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div className="popular-grid">
              <i>Sept 02nd 2018 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div className="popular-grid">
              <i>Sept 02nd 2018 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div className="popular-grid">
              <i>Sept 02nd 2018 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <a className="more" href="singlepage.html">
              More +
            </a>
          </div>
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
