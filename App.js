import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';

export default class App extends React.Component {
  state = {
    name: 'Bob'
  }

  constructor() {
    super();

    this.socket = io('http://localhost:3000', 
      {transports: ['websocket']}
    )
    //connecting to local host does not work for external Android

    this.socket.on('update', () => {
      console.log('in App.js phone side')
      this.setState({name: 'Nate'})
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text>My Name is {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
