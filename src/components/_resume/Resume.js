import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styled from '@emotion/styled';
import { Section0 } from '../_resume-gatsby/Section0/_Section0';
import { Section1 } from '../_resume-gatsby/Section1/_Section1';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      resumePic: file(relativePath: { eq: "_resume/logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Section0 fluid={data.resumePic.childImageSharp.fluid} />
      <Section1 />
    </Container>
  );
};
