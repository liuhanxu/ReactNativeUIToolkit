// ButtonExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import Button from '../../components/Button/Button';
import ButtonGroup from '../../components/Button/ButtonGroup';
import Text from '../../components/Text/Text';

export default class ButtonExample extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Button</Text>

        <View style={{height: 20}}/>
        <ButtonGroup >
          <Button>
            <Text style={{color: '#030863', fontSize: 16}} text='Button1'/>
          </Button>
          <Button type='primary'>
            <Text style={{color: '#fff', fontSize: 16}} text='Button2'/>
          </Button>
          <Button>
            <Text style={{color: '#030863', fontSize: 16}} text='Button3'/>
          </Button>
        </ButtonGroup>

        <View style={{height: 20}}/>
        <Button type="primary" alignItems="flex-start">
          <Image style={{width: 16, height: 16, tintColor: '#fff'}} source={require('../icons/arrow-1.png')}/>
          <Text style={{color: '#fff', fontSize: 16, paddingLeft: 8}} text='Primary Icon'/>
        </Button>
        <View style={{height: 20}}/>
        <Button style={{backgroundColor: '#000662'}}>
          <Image style={{width: 16, height: 16, tintColor: '#fff'}} source={require('../icons/arrow-1.png')}/>
          <Text style={{color: '#fff', fontSize: 16, paddingLeft: 8}} text='Primary Rollover'/>
        </Button>

        <View style={{height: 20}}/>
        <Button type="primary">
          <Text style={{color: '#fff', fontSize: 16}} text='Primary Button'/>
        </Button>
        <View style={{height: 20}}/>
        <Button style={{backgroundColor: '#000662'}}>
          <Text style={{color: '#fff', fontSize: 16}} text='Primary Rollover'/>
        </Button>

        <View style={{height: 20}}/>
        <Button>
          <Text style={{color: '#5370B3', fontSize: 16}} text='Secondary Button'/>
        </Button>
        <View style={{height: 20}}/>
        <Button>
          <Text style={{color: '#030863', fontSize: 16}} text='Secondary Roll'/>
        </Button>

        <View style={{height: 20}}/>
        <Button type="primary" style={{backgroundColor: '#EA9F38'}}>
          <Text style={{color: '#fff', fontSize: 16}} text='Primary Button'/>
        </Button>
        <View style={{height: 20}}/>
        <Button style={{backgroundColor: '#DA6B61'}}>
          <Text style={{color: '#fff', fontSize: 16}} text='Primary Roll'/>
        </Button>
      </ScrollView>
    );
  }

}
