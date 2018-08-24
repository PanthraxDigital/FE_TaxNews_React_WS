import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div class="col-md-3 side-bar">
        <div class="sign_up text-center">
          <h3>Sign Up for Newsletter</h3>
          <p class="sign">Sign up to receive our free newsletters!</p>
          <div>
            <input
              type="text"
              class="text"
              value="Name"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Name';}"
            />
            <input
              type="text"
              class="text"
              value="Email Address"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Email Address';}"
            />
            <input type="submit" value="submit" />
          </div>
          <p class="spam">We do not spam. We value your privacy!</p>
        </div>
        <div class="clearfix" />
        <div class="popular">
          <div class="main-title-head">
            <h5>popular</h5>
            <h4> Most read</h4>
            <div class="clearfix" />
          </div>
          <div class="popular-news">
            <div class="popular-grid">
              <i>Sept 24th 2011 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div class="popular-grid">
              <i>Sept 24th 2011 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div class="popular-grid">
              <i>Sept 24th 2011 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div class="popular-grid">
              <i>Sept 24th 2011 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <div class="popular-grid">
              <i>Sept 24th 2011 </i>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipiscing elit{" "}
                <a href="singlepage.html">Read More</a>
              </p>
            </div>
            <a class="more" href="singlepage.html">
              More +
            </a>
          </div>
        </div>
        <div>
          <div style={{ marginTop: "20px" }}>
            <a href="#">
              <img src="https://via.placeholder.com/250x200" />
              <div class="clearfix" />
            </a>
          </div>
        </div>
        <div class="clearfix" />
      </div>
    );
  }
}

export default Sidebar;
