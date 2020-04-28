import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Layout } from '../layouts/Layout';

import { MyDocument } from '../components/MyDocument';
import { Resume } from '../components/_resume/Resume';

const ResumePage = () => {
  return (
    <Layout>
      {/* <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
      <MyDocument /> */}
      NEW
    </Layout>
  );
};

export default ResumePage;
