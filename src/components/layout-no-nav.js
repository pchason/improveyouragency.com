/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"

import "../assets/scss/style.scss"
import Footer from "./footer"

// const query = graphql`
//   query LayoutNoNavQuery {
//     site {
//       siteMetadata {
//         siteTitle: title
//       }
//     }
//     siteSearchIndex {
//       index
//     }
//   }
// `

const LayoutNoNav = ({ children, className, props }) => {

  const [colorMode, setColorMode] = useColorMode();
  alert(colorMode);
  setColorMode("default");

  return (
    <div className="primary-container">
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutNoNav
