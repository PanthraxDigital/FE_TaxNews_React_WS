import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";

const headerText = {
  fontFamily: "serif",
  color: "white"
};
class Header extends Component {
  constructor(props) {
    super();
    this.indirectTaxClick = this.indirectTaxClick.bind(this);
  }

  indirectTaxClick(e) {
    alert("hi");
  }
  render() {
    return (
      <div className="header">
        <div>
          <div className="header-left">
            <div className="logo">
              <Link to="/">
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
                  <a href="#">About</a>
                </li>{" "}
                |
                <li>
                  <a href="#">Contact</a>
                </li>{" "}
                |
                <li>
                  <a
                    href="http://api.taxknowledge.in:4002/keystone/signin"
                    target="_blank"
                  >
                    Login
                  </a>
                </li>{" "}
              </ul>
            </div>
            <div className="search">
              <div>
                <input type="text" />
                <input type="submit" />
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
                  href="/jobs"
                  to="/jobs"
                  eventKey={9}
                >
                  JOBS
                </NavItem>
                <NavDropdown
                  eventKey={9}
                  title="MORE"
                  id="basic-nav-dropdown"
                  href="/more"
                >
                  <MenuItem
                    eventKey={9.1}
                    componentClass={Link}
                    href="/finance-budget"
                    to="/finance-budget"
                  >
                    FINANCE ACT/BUDGET
                  </MenuItem>
                  <MenuItem
                    eventKey={9.2}
                    eventKey={9.1}
                    componentClass={Link}
                    href="/others"
                    to="/others"
                  >
                    OTHERS
                  </MenuItem>
                </NavDropdown>
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

{
  /* <div className="menu-strip">
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
    <a
      onClick={this.indirectTaxClick}
      style={{
        color: "white",
        cursor: "pointer",
        fontFamily: "serif",
        padding: "13px 10px"
      }}
    >
      INDIRECT TAX{" "}
      <span className="caret" style={{ color: "white" }} />
    </a>
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
    <Link to="/more">
      MORE
      <span className="caret" style={{ color: "white" }} />
    </Link>
  </li>
</ul>
</div> */
}
