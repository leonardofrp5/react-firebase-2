import React, { Component } from 'react';

import { startUi } from '../../services/firebase';

class Login extends Component {

  componentDidMount() {
    startUi('#firebaseui');
  }

  render() {
    return ( <div id="firebaseui">1</div> );
  }
}

export default Login;