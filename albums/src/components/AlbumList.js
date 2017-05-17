import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('http://rallycoding.herokupp.com/api/music_albums')
    .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text> Albums List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
