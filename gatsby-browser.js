// gatsby-browser.js

import React from 'react';
import { Helmet } from 'react-helmet';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <meta name="react-gatsby-webiste" content="superops website using react-gatsby" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HP4WKPMZYR"></script>
    </Helmet>
    {element}
  </>
);
