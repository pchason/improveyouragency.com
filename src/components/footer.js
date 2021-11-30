/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        &copy; Chason Digital Consulting LLC 2021
      </p>
      <p className="art-credits">
        Art credits: Checklist by Creative Stall from the Noun Project
      </p>
    </div>
  </footer>
)

export default Footer
