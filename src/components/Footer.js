import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from '../static/logo.svg'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          source
        }
      }
    }
  `)

  const { source } = data.site.siteMetadata

  return (
    <section>
      <p>
        <img src={logo} height="100" width="100" alt="" />
      </p>
      <p>
        {'Govern de les Illes Balears'},&nbsp;
        <a href={source}>{source}</a>
      </p>
      <p>
        Font: Conselleria de Salut i Consum
      </p>
    </section>
  )
}

export default Footer
