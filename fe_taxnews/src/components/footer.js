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
                <Link to="#">JOBS</Link>
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
