
import React, { Component } from 'react';
import {View} from 'react-native';

export default class ButtonGroup extends Component {
  render() {
    const { children, style } = this.props;
    return (
      <View
        style={[{
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'center',
        },
          style
        ]}
      >
        {children}
      </View>
    );
  }
}
