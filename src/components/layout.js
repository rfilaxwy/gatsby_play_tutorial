import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Header,
  Container,
  Heading,
  NavLinks,
  NavLinkItem,
  NavLinkText
} from './style';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header>{data.site.siteMetadata.title}</Header>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/about">About</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/blog">Blog</NavLinkText>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}
export default Layout