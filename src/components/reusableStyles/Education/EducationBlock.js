import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-bottom: 3rem;
  & .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & h3 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.8rem;
  }
  & h4 {
    padding-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 600;
    opacity: 0.9;
  }
  & p {
    color: ${(props) => props.theme.colors.darkgrey};
    font-style: italic;
  }
`;

export const EducationBlock = ({ degree, school, date, summary, location }) => {
  return (
    <Container>
      <h3>{degree}</h3>
      <h4>{school}</h4>
      <div className="row">
        <span>{date}</span>
        <address>{location}</address>
      </div>
      <div className="row">
        <p>{summary}</p>
      </div>
    </Container>
  );
};
