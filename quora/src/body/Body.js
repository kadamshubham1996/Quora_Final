import React from 'react'
import Feeds from './feeds/Feeds'

export default class Body extends React.Component {
  render() {
    // const notification=this.props.notification
    // {console.log(notification)}
    //alert(notification)
    return (
      <div>
        <Feeds feeds={this.props.feeds}/>
      </div>
    )
  }
}