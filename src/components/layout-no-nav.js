/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import "../assets/scss/style.scss"

const query = graphql`
  query LayoutNoNavQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
    siteSearchIndex {
      index
    }
  }
`

const LayoutNoNav = ({ children, className, props }) => {

  return (
    <div className="primary-container">
      <main className={"container " + className}>{children}</main>
    </div>
  )
}

export default LayoutNoNav
