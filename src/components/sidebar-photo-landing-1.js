import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const SidebarPhotoLanding1 = () => {
  const data = useStaticQuery(graphql`
    {
      largeImage: file(relativePath: {eq: "sidebar photo treatment.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            src
            srcSet
          }
        }
      }
      smallImage: file(relativePath: {eq: "stackrole.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            src
            srcSet
          }
        }
      }
    }
  `)

  const images = withArtDirection(getImage(data.largeImage.childImageSharp), [
    {
      media: "(max-width: 1024px)",
      image: getImage(data.smallImage),
    },
  ])

  console.log(images);

  // largeImage.childImageSharp.fluid.src

  // return <GatsbyImage image={images} />
  // return data.largeImage;
  return null;
}

export default SidebarPhotoLanding1
