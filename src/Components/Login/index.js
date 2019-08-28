import React, { Component } from 'react';

import { startUi } from '../../services/firebase';

class Login extends Component {

  componentDidMount() {
    startUi('#firebaseui');
  }

  render() {
    return ( <div id="firebaseui"></div> );
  }
}

export default Login;