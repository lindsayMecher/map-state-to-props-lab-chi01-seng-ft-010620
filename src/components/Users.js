import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  renderUsernames = () => {
    return this.props.users.map((user, index) => {
      return(
        <li key={index}>
          <h2>Name: {user.username}</h2>
          <h2>Hometown: {user.hometown}</h2>
          <h2>Doggo: {user.doggo}</h2>
        </li>
      )
    })
  }

  render() {
    console.log(this.props)
    console.log(this.props.users)
    return (
      <div>
        <ul>
          Users!
          {this.renderUsernames()}
          Total number of users = {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
