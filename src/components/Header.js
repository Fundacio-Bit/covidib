import React from 'react'
import { Styled, Header } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import favicon from '../static/favicon.ico'
import last from 'lodash/last'

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repoNameWithOwner
        }
      }
      allDataJson(sort: { order: DESC, fields: data }, limit: 1) {
        nodes {
          data(formatString: "DD MMMM", locale: "es")
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  const date = last(data.allDataJson.nodes).data
  return (
    <Header>
      <Helmet title={title}>
        <html lang={`en`} />
        <meta
          name="description"
          content="COVID-19 data panel for Balearic Islands"
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Styled.h1>{title}</Styled.h1>
      <p>Darrera actualització: {date}</p>
    </Header>
  )
}

export default HeaderComponent
