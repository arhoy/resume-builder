import styled from '@emotion/styled';

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;
