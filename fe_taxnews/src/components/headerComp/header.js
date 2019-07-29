import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import axios from "axios";
import { URL_SEARCH } from "../../networkUtility";
import AdSense from "react-adsense";

const headerText = {
  fontFamily: "serif",
  color: "white"
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.searchResult = this.searchResult.bind(this);
    this.changeText = this.changeText.bind(this);
    this.state = {
      textValue: ""
    };
    this.inputTextRef = React.createRef();
  }

  changeText(e) {
    this.setState({
      textValue: e.target.value
    });
  }

  searchResult(e) {
    let searchValue = this.state.textValue;
    this.props.searchCallBack(searchValue);
    this.setState({
      textValue: ""
    });
  }

  render() {
    let searchTextValue =
      this.state.textValue == null ? "" : this.state.textValue;

    return (
      <div className="header">
        <AdSense.Google
                client="ca-pub-4354135056247821"
                slot="1483284168"
                responsive='true'
                format="auto"
              />
        <div>
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <h1>
                  TaxKnowledge
                  <span>.in</span>
                </h1>
              </Link>
              <h5>
                <div style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                  <span className="redColorText">T</span>
                  he <span className="redColorText">P</span>
                  ower of <span className="redColorText">K</span>
                  nowledge
                </div>
              </h5>
            </div>
          </div>
          <div className="social-icons" style={{ display: "none" }}>
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
            <div className="search">
              <div>
                <input
                  type="text"
                  value={searchTextValue}
                  onChange={this.changeText}
                  ref={el => (this.inputTitle = el)}
                />
                {/* <input type="submit" onClick={this.searchResult} value="" /> */}
                {/* <Link to="/search?searchText=">GO</Link> */}
                {this.inputTitle != undefined ? (
                  <Link
                    to={`/search?searchText=${this.inputTitle.value}`}
                    style={{
                      color: "#cf0000",
                      textDecoration: "none"
                    }}
                  >
                    FIND
                  </Link>
                ) : (
                  <Link
                    to={`/search?searchText=""`}
                    style={{
                      color: "#cf0000",
                      textDecoration: "none"
                    }}
                  >
                    FIND
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* Menu*/}
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem componentClass={Link} href="/" eventKey={1} to="/">
                  HOME
                </NavItem>

                <NavItem
                  componentClass={Link}
                  href="/top-stories"
                  to="/top-stories"
                  eventKey={2}
                >
                  TOP STORIES
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/income-tax"
                  to="/income-tax"
                  eventKey={3}
                >
                  INCOME TAX
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/gst"
                  to="/gst"
                  eventKey={4}
                >
                  GST
                </NavItem>
                <NavDropdown
                  eventKey={5}
                  title="INDIRECT TAX"
                  id="basic-nav-dropdown"
                >
                  <MenuItem
                    eventKey={5.1}
                    componentClass={Link}
                    href="/vat-cst"
                    to="/vat-cst"
                  >
                    VAT/CST
                  </MenuItem>
                  <MenuItem
                    eventKey={5.2}
                    componentClass={Link}
                    href="/excise"
                    to="/excise"
                  >
                    EXCISE
                  </MenuItem>
                  <MenuItem
                    eventKey={5.3}
                    componentClass={Link}
                    href="/custom"
                    to="/custom"
                  >
                    CUSTOM
                  </MenuItem>
                </NavDropdown>
                <NavItem
                  componentClass={Link}
                  href="/nbfc-rbi"
                  to="/nbfc-rbi"
                  eventKey={6}
                >
                  NBFC/RBI
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/sebi"
                  to="/sebi"
                  eventKey={7}
                >
                  SEBI
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/roc-company-law"
                  to="/roc-company-law"
                  eventKey={8}
                >
                  ROC/COMPANY LAW
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/icai"
                  to="/icai"
                  eventKey={9}
                >
                  ICAI
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header;

