import React from 'react';

import styled from '@emotion/styled';

import Img from 'gatsby-image';

import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaCode,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 3fr;
  border-bottom: 5px solid ${(props) => props.theme.colors.primary};
  padding: 4rem 0;
  & .icons {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const NameSection = styled.div`
  & h1 {
    color: ${(props) => props.theme.colors.primary};
  }
  & h2 {
    color: ${(props) => props.theme.colors.black};
  }

  & p {
    border-left: 2px solid ${(props) => props.theme.colors.red};
    opacity: 0.9;
  }
  & h1,
  & h2,
  & p {
    padding-left: 1rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Img)`
  width: 16rem;
`;

const InfoSection = styled.div`
  & ul {
    list-style: none;
  }
  & li {
    margin: 3px 0;
    display: flex;
    justify-content: space-between;
  }
  & span {
    margin-right: 4px;
  }
`;

export const Section0 = ({ fluid }) => {
  return (
    <Container>
      <NameSection>
        <h1>Alex Hoy</h1>
        <h2>Tableau & Web Developer</h2>

        <p>
          I have experience creating corporate sales and marketing Tableau
          dashboards for several companies. Areas of knowledge include data
          analysis, SQL and programming
        </p>
      </NameSection>
      <ImageSection>
        <StyledImage fluid={fluid} />
      </ImageSection>

      <InfoSection>
        <ul>
          <li className="email">
            {' '}
            <span>arhoy@ualberta.ca </span> <FaEnvelope className="icons" />
          </li>
          <li className="phone">
            {' '}
            <span>587 501 7726 </span> <FaMobileAlt className="icons" />
          </li>
          <li className="location">
            {' '}
            <span>Remote, Boston MA | USA </span>{' '}
            <FaMapMarkerAlt className="icons" />
          </li>
          <li className="websites">
            {' '}
            <span>codepaper.dev </span> <FaCode className="icons" />
          </li>
          <li className="linkedin">
            {' '}
            <span>linkedin.com/in/alexhoy</span>{' '}
            <FaLinkedin className="icons" />
          </li>
          <li className="github">
            {' '}
            <span>github.com/arhoy</span> <FaGithub className="icons" />
          </li>
        </ul>
      </InfoSection>
    </Container>
  );
};
