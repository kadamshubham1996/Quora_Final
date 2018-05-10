import React from 'react'
import './notification.css'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class notificationComponent extends React.Component{
  render(){
    const notifications = this.props.notifications;
    if (!notifications || Object.keys(notifications).length === 0) {
      return null;
    }
    const notificationStrings = notifications.notification;
    // console.log(notificationStrings.length)
    return (
      <div className="notifications"> 
      {
          notificationStrings.map((notificationString, index) => {
            return <div key={index}>
                <ListGroupItem onClick={this.showReadNotification}>{notificationString.string}</ListGroupItem>
            </div>
          })
        }
        
      </div>
    );
  }
}



export default notificationComponent;