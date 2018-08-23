import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerStyle from "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <a href="index.html">
                <h6>The</h6>
                <h1>
                  Tax
                  <span>News</span>
                </h1>
              </a>
            </div>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a href="#">
                  <i className="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="rss" />
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
          <div className="header-right">
            <div className="top-menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>{" "}
                |
                <li>
                  <a href="about.html">About</a>
                </li>{" "}
                |
                <li>
                  <a href="contact.html">Contact</a>
                </li>{" "}
                |
                <li>
                  <a href="contact.html">Login</a>
                </li>{" "}
                |{" "}
                <li>
                  <a href="contact.html">Subscribe</a>
                </li>{" "}
              </ul>
            </div>
          </div>

          <div className="clearfix" />
        </div>
        <span className="menu" />
        <div className="menu-strip">
          <ul>
            <li>
              <Link exact to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/top-stories">
                TOP STORIES
              </Link>
            </li>
            <li>
              <Link to="/income-tax">
                INCOME TAX
              </Link>
            </li>
            <li>
            <Link to="/gst">GST</Link>
            </li>
            <li>
            <Link to="/indirect-tax">INDIRECT TAX</Link>
            </li>
            <li>
            <Link to="/nbfc-rbi">NBFC/RBI</Link>
            </li>
            <li>
            <Link to="/sebi">SEBI</Link>
            </li>
            <li>
            <Link to="/more">MORE</Link>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header;
