import * as React from 'react';
import {IntlProvider} from 'react-intl';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { autocompleteClasses } from '@mui/material';

// styles found in footer


// markup
const NotFoundPage = (props) => {
  const {
    pageContext: {language, messages},
  } = props;

  const { notFoundBackgroundImage } = useStaticQuery(
    graphql`
      query {
        notFoundBackgroundImage: file(relativePath: {eq: "404-banner.png"}) {
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

  const pluginImage = getImage(notFoundBackgroundImage)
  const backgroundFluidImageStack = [
    pluginImage,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))`,
  ].reverse();

  return (
    <Layout {...props} header="transparent" >
      <BgImage image={backgroundFluidImageStack} className="section-intro">
    <IntlProvider defaultLocale="en" locale={language} messages={messages}>
      <main  className="pageStyles">
        {/* <title>Not found</title> */}
        <p  className="headingStyles">404</p>
        <p  className="paragraphStyles">
          Something went wrong. Let’s <br />take you back home.
          
          
          <br />
          <br/>
          
          <Link to="/"  className="buttonStyles">Home</Link>
        </p>
       
      </main>
    </IntlProvider>
    </BgImage>
    </Layout>
  );
};

export default NotFoundPage;
