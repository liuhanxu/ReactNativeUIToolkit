'use strict'
import React,{Component} from 'react';

import {View,StyleSheet,Platform,
  UIManager} from 'react-native';

import Radio from './Radio';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active_index: props.initial
    }
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this._renderButton = this._renderButton.bind(this);
  }
  static defaultProps = {
    options: [],
    initial: 0,
    buttonColor: '#2196f3',
    selectedButtonColor: '#2196f3',
    formHorizontal: false,
    labelHorizontal: true,
    animation: true,
    labelColor: '#000',
    selectedLabelColor: '#000',
    wrapStyle: {},
    disabled: false
  }

  updateIsActiveIndex(index) {
    this.setState({ is_active_index: index });
    this.props.onPress(this.props.options[index], index)
  }

  _renderButton(obj, i) {
    return (
      <Radio
        isSelected={this.state.is_active_index === i}
        obj={obj}
        key={i}
        index={i}
        buttonColor={this.state.is_active_index === i ? this.props.selectedButtonColor : this.props.buttonColor}
        buttonSize={this.props.buttonSize}
        buttonOuterSize={this.props.buttonOuterSize}
        labelHorizontal={this.props.labelHorizontal}
        labelColor={this.state.is_active_index === i ? this.props.selectedLabelColor : this.props.labelColor}
        labelStyle={this.props.labelStyle}
        style={this.props.radioStyle}
        animation={this.props.animation}
        disabled={this.props.disabled}
        onPress={(value, index) => {
          this.props.onPress(value, index)
          this.setState({is_active_index: index})
        }}
      />
    )
  }

  render() {
    var render_content = null;
    if (this.props.options.length > 0) {
      render_content = this.props.options.map(this._renderButton)
    } else {
      render_content = this.props.children
    }
    console.log(render_content)
    return (
      <View style={[
        Style.radioFrom,
        this.props.style,
        this.props.formHorizontal && Style.formHorizontal
      ]}>
        {render_content}
      </View>
    )
  }
}


const Style = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 30,


    alignSelf: 'center',

    borderColor: '#2196f3',
    borderRadius: 30,
  },

  radioLabel: {
    paddingLeft: 10,
    lineHeight: 20,
  },

  radioNormal: {
    borderRadius: 10,
  },

  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: '#2196f3',
  },

  labelWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

});