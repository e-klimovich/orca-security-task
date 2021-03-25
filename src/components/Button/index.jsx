import React from 'react';

import { ButtonStyled } from './styles';

const Button = (props) => {
  const { children, onClick, type, color } = props;

  return (
    <ButtonStyled type={type} onClick={onClick} color={color}>{children}</ButtonStyled>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'green',
};

export default Button;
