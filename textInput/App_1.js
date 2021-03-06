import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {text: ""};
  }
  render(){
    return(
      <View style={{padding: 20}}>
        <TextInput
          style={{height: 50}}
          placeholder="Enter text here"
          onChangeText={(text)=>this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(" ").map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}