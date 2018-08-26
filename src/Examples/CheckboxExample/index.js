// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import Checkbox from '../../components/Checkbox/Checkbox';
import Text from '../../components/Text/Text';

export default class CheckboxExample extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Checkbox</Text>
        <View style={{height: 20}} />

        <Checkbox
          title='Choice A'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

        <View style={{height: 20}} />
        <Checkbox
          title='Choice B'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

        <View style={{height: 20}} />
        <Checkbox
          title='Choice C'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

      </ScrollView>
    );
  }

}
