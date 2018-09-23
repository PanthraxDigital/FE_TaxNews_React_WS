import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer text-center">
          <div className="bottom-menu">
            <ul>
              <li>
                <Link to="#">ABOUT</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">DISCLAIMER</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">TERMS AND CONDITIONS</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">PRIVACY POLICY</Link>
              </li>{" "}
              |
              <li>
                <a
                  href="http://api.taxknowledge.in:4002/keystone/signin"
                  target="_blank"
                >
                  LOGIN
                </a>
              </li>{" "}
            </ul>
          </div>
          <div className="copyright text-center">
            <p>
              TaxKnowledge.in &copy; 2018 All rights reserved | Powered by{" "}
              <a href="http://www.panthrax.com">
                <strong>PDA</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
