import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer text-center">
          <div class="bottom-menu">
            <ul>
              <li>
                <Link to="#">TOP STORIES</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">INCOME TAX</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">GST</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">INDIRECT TAX</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">NBFC/RBI</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">SEBI</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">MORE</Link>
              </li>{" "}
              |
              <li>
                <Link to="#">CLASSIFIED</Link>
              </li>{" "}
            </ul>
          </div>
          <div class="copyright text-center">
            <p>
              The Tax News &copy; 2018 All rights reserved | Powered by{" "}
              <a href="http://panthrax.com">
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
