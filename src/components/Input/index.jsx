import React from 'react';

import { InputStyled } from './styles';

const Input = (props) => {
  const { onChange, value, placeholder } = props;

  return (
    <InputStyled onChange={onChange} value={value} placeholder={placeholder} />
  )
}

export default Input;
