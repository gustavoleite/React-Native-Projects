import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAzoV2f_T1MiMJULyCRfhd1uWZBZOYHWFg",
      authDomain: "manager-b172f.firebaseapp.com",
      databaseURL: "https://manager-b172f.firebaseio.com",
      projectId: "manager-b172f",
      storageBucket: "manager-b172f.appspot.com",
      messagingSenderId: "393823977262"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
