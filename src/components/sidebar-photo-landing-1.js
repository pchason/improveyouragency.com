import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const SidebarPhotoLanding1 = () => {
  const data = useStaticQuery(graphql`
  {
    largeImage: file(relativePath: {eq: "sidebar photo treatment.png"}) {
      id
      childImageSharp {
        gatsbyImageData(width: 500)
      }
    }
    smallImage: file(relativePath: {eq: "sidebar photo treatment small.png"}) {
      id
      childImageSharp {
        gatsbyImageData(width: 380)
      }
    }
  }
`)

  const images = withArtDirection(getImage(data.largeImage), [
    {
      media: "(max-width: 1022px)",
      image: getImage(data.smallImage),
    },
  ])

  return <GatsbyImage image={images} className="sidebar-image" />
}

export default SidebarPhotoLanding1
