// CheckboxExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import Text from '../../components/Text/Text';

export default class TextExample extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Text</Text>

        <View style={{height: 20}} />
        <Text size="xl">Headline 1</Text>
        <Text size='sm'>Frutiger 45 light 36pt</Text>

        <View style={{height: 20}} />
        <Text size="lg">Headline 2</Text>
        <Text size='sm'>Frutiger 45 light 30pt</Text>

        <View style={{height: 20}} />
        <Text size="sm">Headline 3</Text>
        <Text size='sm'>Frutiger 45 light 30pt</Text>

        <View style={{height: 20}} />
        <Text size="xs">Headline 4</Text>
        <Text size='sm'>Frutiger 45 light 30pt</Text>

        <View style={{height: 20}} />
        <Text size="xs">Body</Text>
        <Text style={{overflow:'hidden'}}>The Command Palette holds infrequently used functionality, like sorting, changing the syntax and changing the indentation settings. With just a few keystrokes, you can search for what you want, without ever having to navigate through the menus or remember obscure key bindings.</Text>

      </ScrollView>
    );
  }

}
