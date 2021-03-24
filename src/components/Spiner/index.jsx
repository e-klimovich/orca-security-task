import React from 'react';

import { ContainerStyled, LoaderStyled } from './styles';

const Spiner = (props) => {
  const { isLoading, children } = props;

  return (
    <ContainerStyled>
      {children}
      {isLoading && <LoaderStyled>...loading</LoaderStyled>}
    </ContainerStyled>
  )
}

export default Spiner;
