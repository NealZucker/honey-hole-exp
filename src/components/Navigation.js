import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand } from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="navigationBar">
        <Navbar collapseOnSelect style={{backgroundColor:'white'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home" className="lifecoach-header" style={{color:'#F9A603'}}>Life Coach</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: '/form'}}>
                <NavItem>
                  <i style={{color:'#F70025'}} className="fa fa-pie-chart fa-lg" aria-hidden="true"/>
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight className="nav-bar-right">
              <Navbar.Text style={{color: "black"}}>
                <i className="fa fa-user fa-lg" aria-hidden="true"/>
                Welcome, {this.props.userStore.firstName}!
              </Navbar.Text>
              <LinkContainer onClick={this.props.userStore.logUserOut} to={{pathname: '/'}}>
                <NavItem>
                  <i style={{color: "black"}} className="fa fa-sign-out fa-lg" aria-hidden="true"/>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
Navigation.propTypes = {
  userStore: React.PropTypes.object,
  logUserOut: React.PropTypes.func
};

export default inject("userStore")(observer(Navigation));
