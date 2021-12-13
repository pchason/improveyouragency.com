/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import SidebarPhotoLanding1 from "../components/sidebar-photo-landing-1"
import Layout from "../components/layout-no-nav"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AgencyAcquisitionReadinessChecklistQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const AgencyAcquisitionReadinessChecklist = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="landing-page-1" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description + " " + site.siteMetadata.title}
      />
      <div className="wrapper"
        sx={{
          display: 'grid',
          gridGap: 3,
          gridTemplateColumns: ['auto', '1fr 539px'],
        }}>
        <div className="main">
          <h1>{frontmatter.title}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="sidebar">
          <SidebarPhotoLanding1 />
          <div className="landing-form">
            <div className="CTA">
              <h2>Is your agency ready for the next level?</h2>
              <p>Download the agency readiness checklist to find out!</p>
            </div>
            <form
              className="contact-form"
              action="/download-agency-readiness-checklist"
              name="agency-acquisition-readiness-checklist"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="agency-acquisition-readiness-checklist" />
              <input type="hidden" name="bot-field" />
              <p>
                <label>First Name<br/>
                  <input type="text" name="firstname" required />
                </label>
              </p>
              <p>
                <label>Last Name<br/>
                  <input type="text" name="lastname" required />
                </label>
              </p>
              <p>
                <label>Email<br/>
                  <input type="email" name="email" required />
                </label>
              </p>
              <p style={{textAlign:'center'}}>
                <button
                  className="button"
                  sx={{
                    variant: "variants.buttonBlueCTA",
                  }}
                  type="submit"
                >
                  Get Agency Readiness Checklist{" "}
                  <span className="icon -right">
                    <RiSendPlane2Line />
                  </span>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AgencyAcquisitionReadinessChecklist

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
