import React from 'react';

import { CardStyled } from './styles';

const Card = (props) => {
  const { children } = props;

  return <CardStyled>{children}</CardStyled>
}

export default Card;
