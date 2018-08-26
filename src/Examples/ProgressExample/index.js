// ProgressExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import ProgressBar from '../../components/Progress/ProgressBar';
import ProgressCircle from '../../components/Progress/ProgressCircle';
import Text from '../../components/Text/Text';

export default class TextExample extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Progress</Text>
        <View style={{height: 20}}/>
        <ProgressCircle progress={0.3}
                        size={80}
                        showsText={true}/>

        <RNText >Title</RNText>

        <View style={{height: 20}}/>
        <RNText>label</RNText>
        <ProgressBar progress={0.3} width={300}/>

      </ScrollView>
    );
  }

}
