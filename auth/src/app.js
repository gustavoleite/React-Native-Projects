import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyA5GdrzARt85dULrKd0Y6aC2M1v3Kv79-g",
      authDomain: "auth-b9892.firebaseapp.com",
      databaseURL: "https://auth-b9892.firebaseio.com",
      projectId: "auth-b9892",
      storageBucket: "auth-b9892.appspot.com",
      messagingSenderId: "402155477508"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App!</Text>
      </View>
    );
  }
}

export default App;
