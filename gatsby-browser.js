// gatsby-browser.js

import React from 'react';
import { Helmet } from 'react-helmet';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <meta name="description" content="Default description for the site" />
      {/* <link rel="stylesheet" href="/styles/global.css" /> */}
    </Helmet>
    {element}
  </>
);
