import React from 'react';

import styled from '@emotion/styled';
import { SectionTitle } from '../components/Titles';

const Container = styled.div`
  margin-bottom: 3rem;
  & .skillContainer {
  }
  & span {
    display: block;
    width: max-content;
    border: 2px solid ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.colors.primaryDark};
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ListsVertical = ({ title, listArray }) => {
  return (
    <Container>
      <SectionTitle> {title} </SectionTitle>
      <div className="skillContainer">
        {listArray.map((item, i) => (
          <span key={i}> {item} </span>
        ))}
      </div>
    </Container>
  );
};
