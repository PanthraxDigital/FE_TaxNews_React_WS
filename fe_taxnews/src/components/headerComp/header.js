import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <div className="header-left">
            <div className="logo">
              <Link to="/top-stories/3423werwrwrw">
                <h1>
                  TaxKnowledge
                  <span>.in</span>
                </h1>
              </Link>
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
                |{" "}
                <li>
                  <a href="#">Jobs</a>
                </li>{" "}
                |
                <li>
                  <a href="#">About</a>
                </li>{" "}
                |
                <li>
                  <a href="#">Contact</a>
                </li>{" "}
                |
                <li>
                  <a href="#">Login</a>
                </li>{" "}
              </ul>
            </div>
            <div class="search">
              <div>
                <input
                  type="text"
                  value=""
                  onfocus="this.value = '';"
                  onblur="if (this.value == '') {this.value = '';}"
                />
                <input type="submit" value="" />
              </div>
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
              <Link to="/top-stories">TOP STORIES</Link>
            </li>
            <li>
              <Link to="/income-tax">INCOME TAX</Link>
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
              <Link to="/roc">ROC/COMPANY LAW</Link>
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
