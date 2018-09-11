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
                  <Link to="/">Home</Link>
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
            <div className="search">
              <div>
                <input type="text" value="" />
                <input type="submit" value="" />
              </div>
            </div>
          </div>
          {/* Menu*/}

          <Navbar
            menu-strip
            inverse
            collapseOnSelect
            style={{
              marginTop: "25px",
              borderRadius: "0px",
              backgroundColor: "black",
              borderColor: "black"
            }}
          >
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem componentClass={Link} href="/" to="/">
                  HOME
                </NavItem>

                <NavItem
                  componentClass={Link}
                  href="/top-stories"
                  to="/top-stories"
                >
                  TOP STORIES
                </NavItem>
                <NavItem
                  componentClass={Link}
                  href="/income-tax"
                  to="/income-tax"
                >
                  INCOME TAX
                </NavItem>
                <NavItem componentClass={Link} href="/gst" to="/gst">
                  GST
                </NavItem>
                <NavDropdown
                  eventKey={3}
                  title="INDIRECT TAX"
                  id="basic-nav-dropdown"
                >
                  <MenuItem
                    eventKey={3.1}
                    componentClass={Link}
                    href="/top-stories"
                    to="/top-stories"
                  >
                    VAT/CST
                  </MenuItem>
                  <MenuItem eventKey={3.2}>EXCISE</MenuItem>
                  <MenuItem eventKey={3.3}>CUSTOM</MenuItem>
                </NavDropdown>
                <NavItem componentClass={Link} href="/gst" to="/gst">
                  NBFC/RBI
                </NavItem>
                <NavItem componentClass={Link} href="/gst" to="/gst">
                  SEBI
                </NavItem>
                <NavItem componentClass={Link} href="/gst" to="/gst">
                  ROC/COMPANY LAW
                </NavItem>
                <NavItem componentClass={Link} href="/gst" to="/gst">
                  JOBS
                </NavItem>
                <NavDropdown eventKey={3} title="MORE" id="basic-nav-dropdown">
                  <MenuItem
                    eventKey={3.1}
                    componentClass={Link}
                    href="/top-stories"
                    to="/top-stories"
                  >
                    FINANCE ACT/BUDGET
                  </MenuItem>
                  <MenuItem eventKey={3.2}>OTHERS</MenuItem>
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
