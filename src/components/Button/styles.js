import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  background: ${props => props.theme.colors[props.color]};
  color: white;
  cursor: pointer;
  height: 36px;
  padding: 0 15px;
  border-radius: 20px;
`;
