// RadioExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text as RNText, Image} from 'react-native';

import Radio from '../../components/Radio/Radio';
import Text from '../../components/Text/Text';

import RadioGroup from '../../components/Radio/RadioGroup';

export default class RadioExample extends Component {


  render() {
    const radio_props = [
      {label: 'param1', value: 0 },
      {label: 'param2', value: 1 }
    ];
    return (
      <ScrollView style={{flex: 1, padding: 30}}>
        <Text size='lg'>Checkbox</Text>
        <View style={{height: 20}} />

        <Radio
          title='Choice A'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

        <View style={{height: 20}} />
        <Radio
          title='Choice B'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

        <View style={{height: 20}} />
        <Radio
          title='Choice C'
          size='md'
          checked={false}
          onChange={value => console.log(value)}
        />

        {/*<Radio*/}
          {/*animation={true}*/}
          {/*disabled={false}*/}
          {/*onPress={(value, index) => {*/}
            {/*console.log(value);*/}
          {/*}}*/}
        {/*/>*/}

        <RadioGroup options={radio_props}
                    initial={0}/>

      </ScrollView>
    );
  }

}
