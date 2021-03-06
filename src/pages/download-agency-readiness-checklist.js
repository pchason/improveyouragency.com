import React from "react"
import { IoIosDownload } from "react-icons/io"

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
        <div className="download-icon"></div>
        <IoIosDownload size={56} />
      </a>
      <p>What growth or acquisition readiness challenges is your agency facing? <a href="https://calendly.com/paulchason/15min" target="_blank" rel="noreferrer">Schedule a 15 minute call with Paul</a> to find out how he can help.</p>
    </div>
  </Layout>
)

export default DownloadReadinessChecklist
