import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Overlay from 'react-bootstrap/lib/Overlay'
import ReactDOM from 'react-dom'
import NavItem from 'react-bootstrap/lib/NavItem'
import NotificationComponent from './notificationComp'
import AppActions from '../../actions/AppActions'
import Badge from 'react-bootstrap/lib/Badge'

class Notification extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      show: false
    };
  }

  handleToggle() {  
    this.setState({ show: !this.state.show });

  }

  render() {
    const notifications = this.props.notifications;
    if (!notifications || Object.keys(notifications).length === 0) {
      return null;
    }
    const notificationStrings = notifications.notification;
     return (
      <div style={{ height: 20, position: 'relative' }}>
         <NavItem eventKey={1} href="#" class="glyphicon glyphicon-bell" ref={button => {
            this.target = button;
          }} onClick={this.handleToggle}>
          Notification<Badge>{notificationStrings.length}</Badge></NavItem>

        <Overlay
          show={this.state.show}
          onHide={() => this.setState({ show: true })}
          placement="bottom"
          container={this}
          target={() => ReactDOM.findDOMNode(this.target)}
        >
          <NotificationComponent notifications={this.props.notifications}/>
        </Overlay>
      </div>
    );
  }
}


export default Notification;