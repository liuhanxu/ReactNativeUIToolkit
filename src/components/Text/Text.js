// Label.js

'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Text as RNText} from 'react-native';

import Default from '../../_styles/Default';

export default class Text extends Component {

  static propTypes = {
    ...RNText.propTypes,
    type: PropTypes.oneOf(['default', 'title', 'detail', 'danger']),
    size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    ...RNText.defaultProps,
    type: 'default',
    size: 'md',
    numberOfLines: 1,
  };

  buildProps() {
    let {type, size, style, text, children, ...others} = this.props;

    let color, fontSize;
    switch (size) {
      case 'xl': fontSize = Default.labelFontSizeXL; break;
      case 'lg': fontSize = Default.labelFontSizeLG; break;
      case 'sm': fontSize = Default.labelFontSizeSM; break;
      case 'xs': fontSize = Default.labelFontSizeXS; break;
      default: fontSize = Default.labelFontSizeMD;
    }
    switch (type) {
      case 'title':
        color = Default.labelTextTitleColor;
        fontSize = Math.round(fontSize * Default.labelTitleScale);
        break;
      case 'detail':
        color = Default.labelTextDetailColor;
        fontSize = Math.round(fontSize * Default.labelDetailScale);
        break;
      case 'danger':
        color = Default.labelTextDangerColor;
        fontSize = Math.round(fontSize * Default.labelDangerScale);
        break;
      default:
        color = Default.labelTextColor;
    }
    style = [{
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: color,
      fontSize: fontSize,
      overflow: 'hidden',
      // fontFamily:'frutiger',
    }].concat(style);

    if (text || text === '' || text === 0) children = text;

    return {type, size, style, text, children, ...others};
  }

  render() {
    let props = this.buildProps();
    return (
      <RNText {...props} />
    );
  }
}
