'use strict'
import React,{Component} from 'react';
import {View, Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation,StyleSheet} from 'react-native';


export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  static defaultProps = {
    isSelected: false,
    buttonColor: '#2196f3',
    selectedButtonColor: '#2196f3',
    disabled: false,
  }
  componentWillUpdate () {
    if (this.props.animation) {
      LayoutAnimation.spring()
    }
  }
  render () {
    var c = this.props.children;
    const renderContent = c ? (
      <View style={[
        Style.radioWrap,
        this.props.style,
      ]}>
        {c}
      </View>
    ) : (
      <View style={[
        Style.radioWrap,
        this.props.style,
      ]}>
        <RadioButtonInput {...this.props}/>
        <RadioButtonLabel {...this.props}/>
      </View>
    )
    return (
      <View style={this.props.wrapStyle}>
        {renderContent}
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


export class RadioButtonInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false,
      buttonColor: props.buttonColor || '#2196f3'
    }
  }
  render () {
    var innerSize = {width: 20, height:20, borderRadius: 20/2 }
    var outerSize = {width: 20+10, height:20+10, borderRadius: (20+10)/2 }
    if (this.props.buttonSize) {
      innerSize.width = this.props.buttonSize
      innerSize.height = this.props.buttonSize
      innerSize.borderRadius = this.props.buttonSize /2
      outerSize.width = this.props.buttonSize + 10
      outerSize.height = this.props.buttonSize + 10
      outerSize.borderRadius = (this.props.buttonSize + 10) / 2
    }
    if (this.props.buttonOuterSize) {
      outerSize.width = this.props.buttonOuterSize
      outerSize.height = this.props.buttonOuterSize
      outerSize.borderRadius = this.props.buttonOuterSize / 2
    }
    var outerColor = this.props.buttonOuterColor
    var borderWidth = this.props.borderWidth || 3
    var innerColor = this.props.buttonInnerColor
    if (this.props.buttonColor) {
      outerColor = this.props.buttonColor
      innerColor = this.props.buttonColor
    }
    var c = (
      <View style={[
        Style.radioNormal,
        this.props.isSelected && Style.radioActive,
        this.props.isSelected && innerSize,
        this.props.isSelected && {backgroundColor:innerColor}
      ]}/>
    )
    var radioStyle = [
      Style.radio,
      {
        borderColor:outerColor,
        borderWidth:borderWidth
      },
      this.props.buttonStyle,
      outerSize
    ]

    if (this.props.disabled) {
      return (
        <View style={this.props.buttonWrapStyle} >
          <View style={radioStyle}>
            {c}
          </View>
        </View>
      )
    }

    return (
      <View style={this.props.buttonWrapStyle} >
        <TouchableOpacity
          style={radioStyle}
          onPress={() => { this.props.onPress( this.props.obj.value, this.props.index) }
          }>
          {c}
        </TouchableOpacity>
      </View>
    )
  }
}

RadioButtonInput.defaultProps = {
  buttonInnerColor: '#2196f3',
  buttonOuterColor: '#2196f3',
  disabled: false
}

export class RadioButtonLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false,
      buttonColor: '#2196f3',
    }
  }
  render () {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!this.props.disabled) {
            this.props.onPress( this.props.obj.value, this.props.index)}
        }
        }>
        <View style={[
          this.props.labelWrapStyle,
          Style.labelWrapStyle,
        ]} >
          <Text style={[
            Style.radioLabel,
            {color: this.props.labelColor},
            this.props.labelStyle
          ]}>{this.props.obj.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}