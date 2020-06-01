import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInput extends Component {

  state = {
    username: '',
    hometown: '',
    doggo: ''
  }

  // input is handled by the components local state which holds
  // the entire state object. Then you can send that to the store.
  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    // prevent default submission of form.
    // dispatch the type and the payload to the store
    // in this case the payload is action.user.
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <p>
        <input
            type="text"
            id="doggo"
            onChange={this.handleInputChange}
            placeholder="doggo"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput);
