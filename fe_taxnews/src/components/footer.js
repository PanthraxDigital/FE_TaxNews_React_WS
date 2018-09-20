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
                <Link to="#">LOGIN</Link>
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
