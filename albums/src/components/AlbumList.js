import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('http://rallycoding.herokupp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text> Albums List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
