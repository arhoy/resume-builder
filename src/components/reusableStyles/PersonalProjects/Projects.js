import React from 'react';
import styled from '@emotion/styled';
import { SectionTitle } from '../components/Titles';

const Container = styled.div`
  margin-bottom: 3rem;
  & span {
    margin-right: 1rem;
    padding: 4px 8px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme.colors.black};
  }
`;

export const Projects = ({ title, projectsArray }) => {
  return (
    <Container>
      <SectionTitle> {title} </SectionTitle>
      <div className="projects">
        {projectsArray.map((skill, i) => (
          <span key={i}> {skill} </span>
        ))}
      </div>
    </Container>
  );
};
