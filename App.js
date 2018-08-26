import React from 'react';
import {StyleSheet, Text as RNText, View, Platform, ScrollView} from 'react-native';

import Button from './src/components/Button/Button';
import Checkbox from './src/components/Checkbox/Checkbox';
// import Radio from './src/components/ToolKits/Radio';
import Text from './src/components/Text/Text';

import ListItem from './src/components/ListItem/ListItem'

import ButtonExample from './src/Examples/ButtonExample';
import CheckboxExample from './src/Examples/CheckboxExample';

import TextExample from './src/Examples/TextExample';
import LinkExample from './src/Examples/LinkExample';
import ProgressExample from './src/Examples/ProgressExample';
import RadioExample from './src/Examples/RadioExample';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={{height:20}}/>
        <ButtonExample/>

        <View style={{height:40}}/>
        <CheckboxExample/>

        <View style={{height:40}}/>
        <TextExample/>

        <View style={{height:40}}/>
        <LinkExample/>

        <View style={{height:40}}/>
        <ProgressExample/>

        <View style={{height:40}}/>
        <RadioExample/>


      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    paddingTop:30
  },
  textStyle: {
    color: 'white'
  },
  buttonStyle: {
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c'
  },
});
