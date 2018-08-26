// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Default from '../../_styles/Default';

export default class Button extends TouchableOpacity {
  
  static propTypes = {
    ...TouchableOpacity.propTypes,
    type: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'link']),
    size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    titleStyle: Text.propTypes.style,
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
    type: 'default',
    size: 'md',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      let opacity = Default.btnDisabledOpacity;
      if (!nextProps.disabled) {
        let fs = StyleSheet.flatten(nextProps.style);
        opacity = fs && (fs.opacity || fs.opacity === 0) ? fs.opacity : 1;
      }
      this.state.anim.setValue(opacity);
    }
  }

  buildProps() {
    let {style, type, size, title, titleStyle, activeOpacity, disabled, children, ...others} = this.props;

    let backgroundColor, borderColor, borderWidth, borderRadius, paddingVertical, paddingHorizontal;
    let textColor, textFontSize;
    switch (type) {
      case 'primary':
        backgroundColor = Default.btnPrimaryColor;
        borderColor = Default.btnPrimaryBorderColor;
        textColor = Default.btnPrimaryTitleColor;
        break;
      case 'secondary':
        backgroundColor = Default.btnSecondaryColor;
        borderColor = Default.btnSecondaryBorderColor;
        textColor = Default.btnSecondaryTitleColor;
        break;
      case 'danger':
        backgroundColor = Default.btnDangerColor;
        borderColor = Default.btnDangerBorderColor;
        textColor = Default.btnDangerTitleColor;
        break;
      case 'link':
        backgroundColor = Default.btnLinkColor;
        borderColor = Default.btnLinkBorderColor;
        textColor = Default.btnLinkTitleColor;
        break;
      default:
        backgroundColor = Default.btnColor;
        borderColor = Default.btnBorderColor;
        textColor = Default.btnTitleColor;
    }
    switch (size) {
      case 'xl':
        borderRadius = Default.btnBorderRadiusXL;
        paddingVertical = Default.btnPaddingVerticalXL;
        paddingHorizontal = Default.btnPaddingHorizontalXL;
        textFontSize = Default.btnFontSizeXL;
        break;
      case 'lg':
        borderRadius = Default.btnBorderRadiusLG;
        paddingVertical = Default.btnPaddingVerticalLG;
        paddingHorizontal = Default.btnPaddingHorizontalLG;
        textFontSize = Default.btnFontSizeLG;
        break;
      case 'sm':
        borderRadius = Default.btnBorderRadiusSM;
        paddingVertical = Default.btnPaddingVerticalSM;
        paddingHorizontal = Default.btnPaddingHorizontalSM;
        textFontSize = Default.btnFontSizeSM;
        break;
      case 'xs':
        borderRadius = Default.btnBorderRadiusXS;
        paddingVertical = Default.btnPaddingVerticalXS;
        paddingHorizontal = Default.btnPaddingHorizontalXS;
        textFontSize = Default.btnFontSizeXS;
        break;
      default:
        borderRadius = Default.btnBorderRadiusMD;
        paddingVertical = Default.btnPaddingVerticalMD;
        paddingHorizontal = Default.btnPaddingHorizontalMD;
        textFontSize = Default.btnFontSizeMD;
    }
    borderWidth = Default.btnBorderWidth;

    style = [{
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }].concat(style);
    style = StyleSheet.flatten(style);
    if (disabled) {
      style.opacity = Default.btnDisabledOpacity;
    }
    this.state.anim._value = style.opacity === undefined ? 1 : style.opacity;

    if (!React.isValidElement(title) && (title || title === '' || title === 0)) {
      titleStyle = [{
        color: textColor,
        fontSize: textFontSize,
        overflow: 'hidden',
      }].concat(titleStyle);
      title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>;
    }
    if (title) children = title;

    this.props = {style, type, size, title, titleStyle, activeOpacity, disabled, children, ...others};
  }

  render() {
    this.buildProps();
    return super.render();
  }
}
