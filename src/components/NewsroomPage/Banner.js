import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

const Banner = () => {
  const { newsroomBackgroundImage } = useStaticQuery(
    graphql`
      query {
        newsroomBackgroundImage: file(relativePath: {eq: "newsroom-banner.png"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000,
              quality: 100,
              webpOptions: {quality: 100}
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(newsroomBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.2))`,
  ].reverse();

  return (
    <div className="newsroom-banner">
      <div className="newsroom-banner__text">
        <h1>Newsroom</h1>
        <h3>Socious’ freshest and latest</h3>
      </div>
      </div>
   
  )
}

export default Banner
