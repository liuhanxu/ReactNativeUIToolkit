// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import Link from '../../components/Link/Link';
import Text from '../../components/Text/Text';

export default class TextExample extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Link</Text>
        <View style={{height: 20}} />
        <Link linkDefault={true} linkStyle={{color:'blue'}} linkText="Main Link"/>

        <View style={{height: 20}} />
        <Link linkText="Secondary Link"/>
      </ScrollView>
    );
  }

}
