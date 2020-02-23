import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

interface IProps {

}

interface IState {
  text: string
}

export default class Home02Container extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: "dsdfs"
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.text}</Text>
        <Text>02</Text>
      </View>
    )
  }
}