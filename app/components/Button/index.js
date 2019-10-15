/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { StyledButton, BottomStyledButton } from './StyledButton';

function Button(props) {
  let button;

  const width = props.maxWidth ? '100%' : '7em';

  if (props.bottom) {
    button = (
      <BottomStyledButton width={width} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </BottomStyledButton>
    );
  } else {
    button = (
      <StyledButton onClick={props.onClick}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
