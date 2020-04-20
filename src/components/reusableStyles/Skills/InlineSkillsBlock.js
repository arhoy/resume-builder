import React from 'react';

import styled from '@emotion/styled';
import { SectionTitle } from '../components/Titles';

const Container = styled.div`
  margin-bottom: 3rem;
  & .skillContainer {
  }
  & span {
    display: inline-block;
    background: ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    border-radius: 8px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const InlineSkillsBlock = ({ title, skillsArray }) => {
  return (
    <Container>
      <SectionTitle> {title} </SectionTitle>
      <div className="skillContainer">
        {skillsArray.map((skill, i) => (
          <span key={i}> {skill} </span>
        ))}
      </div>
    </Container>
  );
};
