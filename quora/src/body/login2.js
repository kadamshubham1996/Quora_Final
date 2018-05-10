import React from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Appactions from '../Actions/Appaction'



export default class Login extends React.Component {
    constructor(){
        super();
        this.handleLoginClick=this.handleLoginClick.bind(this)
        this.handleSignUpClick=this.handleSignUpClick.bind(this)
    }
     handleUserClick(){
         Appactions.hideLoginPopup();
    
       }
       handleLoginClick(){
        AppActions.hideLoginPopup();
        const username = this.usernameField.value;
        const password = this.passwordField.value;
        AppActions.login(username, password)
        
       }
       handleSignUpClick()
        {
            AppActions.hideSignupPopup();
            const fname = this.fnameField.value;
            const lname = this.lnameField.value;
            const email = this.emailField.value;
            const password = this.passwordField.value;
            const mobile = this.mobileField.value;
            const dob = this.mobileField.value;
            const gender = this.genderField.value;
    
            AppActions.signUp(fname, lname, email, password, mobile, dob, gender )
        } 
    render() {
        let shouldShowDialog = this.props.shouldShowLogin;
        if (shouldShowDialog) {
            return (
                <div className="static-modal">
                <Modal.Dialog>
                        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                              <Tab eventKey={1} title="Login">
                              <Modal.Header>
              <Modal.Title>Please login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Username or email</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="username"
                  inputRef={(ref) => {this.usernameField = ref}}
                />
              </FormGroup>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>password</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="password"
                  inputRef={(ref) => {this.passwordField = ref}}
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleCancelClick}>Cancel</Button>
              <Button bsStyle="primary" onClick={this.handleLoginClick}>Login</Button>
            </Modal.Footer>
                                   
                              </Tab>
                        <Tab eventKey={2} title="Registration">
                        <Modal.Header>
                                            <Modal.Title>Registration</Modal.Title>
                                        </Modal.Header>

                                         <Modal.Body>
                            
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter First Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="First name"
                                    inputRef={(ref) => { this.fnameField = ref }}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Last Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Last name"
                                    inputRef={(ref) => { this.lnameField = ref }}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Email</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Email"
                                    inputRef={(ref) => { this.emailField = ref }}
                                />
                            </FormGroup>


                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    placeholder="Password"
                                    inputRef={(ref) => { this.passwordField = ref }}
                                />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Mobile</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Mobile"
                                    inputRef={(ref) => { this.mobileField = ref }}
                                />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Date Of Birth</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Date of Birth(in Epoch Time format)"
                                    inputRef={(ref) => { this.dobField = ref }}
                                />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>Enter Gender</ControlLabel>
                                <FormControl
                                    type="text"
                                    
                                    placeholder="Gender"
                                    
                                    inputRef={(ref) => { this.genderField = ref }}
                                />

                                {/* <DropdownButton
                                 title={"Select Gender"}
                                >
                                <MenuItem eventKey="1">Male</MenuItem>
                                <MenuItem eventKey="2">Female</MenuItem>
                                <MenuItem eventKey="3">Other</MenuItem>
                                </DropdownButton> */}

                                
                            </FormGroup>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.handleCancelClick}>Cancel</Button>
                            <Button bsStyle="primary" onClick={this.handleSignUpClick}>Sign Up</Button>
                        </Modal.Footer>
                              </Tab> 
                        </Tabs>
                        </Modal.Dialog>
                   
                </div>
            );
        }
        return null;
    }

}