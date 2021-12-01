import React from "react"
import { IoIosDownload } from "react-icons/io"
import SVGIcon from "../../static/assets/checklist.svg"
// import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

import Layout from "../components/layout-no-nav"

const DownloadReadinessChecklist = () => (
  <Layout className="thanks-page">
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <a href="/assets/agency-acquisition-readiness-checklist.pdf" target="_blank">
      <h1>Download the Agency Readiness Checklist</h1>
        {/* <SVGIcon className="download-icon" /> */}
        <div className="download-icon"></div>
        <IoIosDownload size={56} />
      </a>
      <p>What growth or acquisition readiness challenges is your agency facing? <a href="https://calendly.com/paulchason/15min" target="_blank" rel="noreferrer">Schedule a 15 minute call with Paul</a> to find out how he can help.</p>
    </div>
  </Layout>
)

export default DownloadReadinessChecklist
