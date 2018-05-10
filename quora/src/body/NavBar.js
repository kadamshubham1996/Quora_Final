import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import AppActions from '../actions/AppActions'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Overlay from 'react-bootstrap/lib/Overlay'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Notifications from './notification/Notifications'
import './Nav.css'
import './navbar.css'
export default class MyNavBar extends React.Component {

  constructor(){
    super();
    this.getUserButton = this.getUserButton.bind(this);
  }
  handleUserClick = () => {
    AppActions.showLoginPopup();
  };

  handleSignUpClick = () => {
    AppActions.showSignUpPopup();
  };

  handleOnAddQclick = () => {
    AppActions.showAddQPopup();
  };
  showOverlay=()=>{
    AppActions.showOverlayPopup();
  };

  getUserButton=() => {
    // let user=this.props.user;
    // if(Object.keys(user).length==0){
    //   return <Button bsStyle="primary" disabled={false} onClick={this.handleUserClick}>user</Button>
    // }
    // return "Welcome" + user.firstName
    let user = this.props.user;


    if(Object.keys(user).length === 0){
          return <Nav>
            <NavItem eventKey={1} href="#">
             <Button bsStyle="primary"  onClick={this.handleUserClick}>Login</Button>               
              </NavItem>
              <NavItem eventKey={1} href="#">
              <Button bsStyle="primary"  onClick={this.handleSignUpClick}>Sign Up</Button>
              </NavItem>
              </Nav>
    }
              return <NavItem eventKey={4} href="#" class="glyphicon glyphicon-user">{user.firstName}</NavItem>
    
    };

  render() {
    return (
      //return <NavItem eventKey={4} href="#">{user.firstName}</NavItem>
      <div>
        <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <div className="navbar">
              <a href="#brand" >Quora</a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" class="glyphicon glyphicon-home">
              Home
              </NavItem>
              <NavItem eventKey={2} href="#" class="glyphicon glyphicon-edit">
              Answer
              </NavItem>
              <NavItem eventKey={3} > 
              <Notifications  notifications={this.props.notifications}/> 
             </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <FormControl type="text" placeholder="Search anything"/>
              </NavItem>
              {
                this.getUserButton()
              }
              <NavItem eventKey={2} href="#">
                <Button bsStyle="warning"  onClick={this.handleOnAddQclick}>Add Question</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>


      </div>
    )
  }
  }