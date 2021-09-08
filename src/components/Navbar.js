import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/projects">Servicios</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}
