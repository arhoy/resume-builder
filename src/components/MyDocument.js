import React from 'react';
import styled from '@emotion/styled';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const Container = styled.div`
  width: 100%;
  margin: 1rem;
  background: red;
`;

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <div>Section 1</div>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
