import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class redButton extends Component{
  render(){
    return(
      <Button color="red" title="submit"></Button>
    );
  }

}

export default class App extends Component {
  render() {
    return (
       // <Text style={{marginTop:250,marginLeft:150}}>I am Marvellian</Text>
        <View style={{marginTop:580}}>
      //  <Button title="Play" color="red"></Button>
      <redButton/>
        </View>
        
    );
  }
}