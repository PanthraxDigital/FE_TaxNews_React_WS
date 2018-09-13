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
                <Link to="/top-stories">TOP STORIES</Link>
              </li>{" "}
              |
              <li>
                <Link to="/income-tax">INCOME TAX</Link>
              </li>{" "}
              |
              <li>
                <Link to="/gst">GST</Link>
              </li>{" "}
              |
              <li>
                <Link to="/excise">EXCISE</Link>
              </li>{" "}
              |
              <li>
                <Link to="/nbfc-rbi">NBFC/RBI</Link>
              </li>{" "}
              |
              <li>
                <Link to="/sebi">SEBI</Link>
              </li>{" "}
              |
              <li>
                <Link to="/others">OTHERS</Link>
              </li>{" "}
              |
              <li>
                <Link to="/jobs">JOBS</Link>
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
