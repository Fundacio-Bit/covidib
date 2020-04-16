import React from "react"
import { Styled, Header } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import favicon from '../static/favicon.ico'

const HeaderComponent = ({ lastUpdatedTime }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repoNameWithOwner
        }
      }
    }
  `)

  const { title, repoNameWithOwner } = data.site.siteMetadata

  return (
    <Header>
      <Helmet title={title}>
        <html lang={`en`} />
        <meta
          name="description"
          content={`Dashboard for GitHub Metrics for ${repoNameWithOwner}`}
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Styled.h1>{title}</Styled.h1>
      <p>Darrera actualització: {lastUpdatedTime}</p>
    </Header>
  )
}

export default HeaderComponent
