import React, { Component } from 'react'
import classNames from 'classnames';

import PropTypes from 'prop-types';

import styles from './styles.css'
class Button extends Component {
  render() {
    const {
      children,
      type,
      size,
      className,
      href,
      icon,
      iconAlignment,
      theme,
      flat,
      bordered,
      borderless,
      iconButton,
      disabled,
      ...others
    } = this.props;
   
 const buttonProps = {
      ref: (node) => {
        this.buttonNode = node;
      },
     
    };
   

   
    return (
     
        <button  className={className}>
                   {children}
        </button>
     
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconAlignment: PropTypes.string,
  theme: PropTypes.shape({}),
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  onClick: PropTypes.func,
  iconButton: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  type: 'primary',
  size: 'small',
  className: '',
  href: '',
  icon: null,
  iconAlignment: 'left',
  theme: {},
  disabled: false,
  flat: false,
  bordered: false,
  borderless: false,
  onClick: null,
  iconButton: false,
};
export default Button;