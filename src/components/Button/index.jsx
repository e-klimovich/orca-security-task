import React from 'react';

import { ButtonStyled } from './styles';

const Button = (props) => {
  const { children, onClick, type } = props;

  return (
    <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
  )
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
