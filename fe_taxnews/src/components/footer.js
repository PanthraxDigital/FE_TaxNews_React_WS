import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdSense from "react-adsense";

class Footer extends Component {
  render() {
    return (
      <div>
        
        <div className="footer text-center">
          <div className="bottom-menu">
            <ul>
              <li>
                <Link to="/aboutus">ABOUT</Link>
              </li>{" "}
              |
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>{" "}
              |
              <li>
                <Link to="/disclaimer">DISCLAIMER</Link>
              </li>{" "}
              |
              <li>
                <Link to="/terms">TERMS AND CONDITIONS</Link>
              </li>{" "}
              |
              <li>
                <Link to="/privacy">PRIVACY POLICY</Link>
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
              TaxKnowledge.in &copy; {new Date().getFullYear()} All rights
              reserved | Powered by{" "}
              <a href="http://www.panthrax.com">
                <strong>Panthrax</strong>
              </a>
            </p>
          </div>
          <AdSense.Google
                client="ca-pub-4354135056247821"
                slot="1483284168"
                layout="display"
                format="auto"
                responsive="true"
              />
        </div>
      </div>
    );
  }
}

export default Footer;
