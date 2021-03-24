import React from 'react';

import { TitleStyled } from './styles';

const Title = (props) => {
  const { children } = props;

  return <TitleStyled>{children}</TitleStyled>
}

export default Title;
