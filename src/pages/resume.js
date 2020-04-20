import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Pdf from 'react-to-pdf';

import { Layout } from '../layouts/Layout';
import { Section0 } from '../components/_resume/Section0/_Section0';
import { Button } from '../components/reusableStyles/components/Buttons';
import { Section1 } from '../components/_resume/Section1/_Section1';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const query = graphql`
  query {
    resumePic: file(relativePath: { eq: "_resume/logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const ref = React.createRef();

const ResumePage = ({ data }) => {
  return (
    <Layout>
      <Pdf
        style={{ width: '100%', height: '100%', background: 'blue' }}
        targetRef={ref}
        filename="code-example.pdf"
      >
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      <Container ref={ref}>
        <Section0 fluid={data.resumePic.childImageSharp.fluid} />
        <Section1 />
      </Container>
    </Layout>
  );
};

export default ResumePage;
