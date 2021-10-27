import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout pageTitle="Home">
    <p>Following the gastby tutorial</p>
    <StaticImage
      alt='Space the outter parts'
      src="../images/space.jpeg"
    />
  </Layout>
)
export default IndexPage;