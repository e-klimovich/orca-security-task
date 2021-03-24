import React from 'react';

import { InputStyled } from './styles';

const Input = (props) => {
  const { onChange, value } = props;

  return (
    <InputStyled onChange={onChange} value={value} />
  )
}

export default Input;
