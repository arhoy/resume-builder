import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  margin: 1rem 0;
  max-width: 60rem;
  justify-content: space-between;
  align-items: center;
  & .skill {
    font-size: 1.7rem;
    font-weight: bold;
  }
  & .level {
    display: flex;
  }
`;

const Circle = styled.div`
  border: 1px solid ${(props) => props.theme.colors.black};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 4px;
  &.fill {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.primaryDark}
    );
    border: none;
  }
`;

export const SkillLevel = ({ skill, level }) => {
  const renderLevel = (level) => {
    return (
      <div className="level">
        <Circle className={level >= 1 && 'fill'} />
        <Circle className={level >= 2 && 'fill'} />
        <Circle className={level >= 3 && 'fill'} />
        <Circle className={level >= 4 && 'fill'} />
        <Circle className={level >= 5 && 'fill'} />
        <Circle className={level >= 6 && 'fill'} />
        <Circle className={level >= 7 && 'fill'} />
        <Circle className={level >= 8 && 'fill'} />
        <Circle className={level >= 9 && 'fill'} />
        <Circle className={level >= 10 && 'fill'} />
      </div>
    );
  };

  return (
    <Container>
      <div className="skill">{skill}</div>
      <div className="level">{renderLevel(level)}</div>
    </Container>
  );
};
