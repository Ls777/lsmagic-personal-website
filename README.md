# Louis Sanchez Personal Website

My personal website, located at lsmagic.com

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this as a starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/Ls777/lsmagic-personal-website
npm run dev
```

### Adding a new project
- Create a new folder in ``content/projects`` with the current date (Format: YYYY-MM-DD)
- Create a new markdown file, add the frontmatter (use the same date format)
- Add an image and reference it in your frontmatter as ``cover``
- Write your content below the frontmatter

If you're still unsure have a look at the already existing examples.

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Building your site

```
npm run build
```
Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/website.js``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleAlt: 'Emma - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-emma.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  author: 'LekoArts', // Author for schemaORGJSONLD
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@emma', // Twitter Username
  ogSiteName: 'emma', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-12345689-1',
  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
  // Settings for typography.jsx
  headerFontFamily: 'Merriweather',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px',
};
```

You can also configure the styling of the site by editing the theme variables in ``config/theme.js``. `overlay` are the colors that get randomly selected for the Index page and the project detail view.

```JS
import { darken } from 'polished';

const brand = {
  primary: '#cf1993',
  secondary: '#7b8acc',
};

const colors = {
  grey: '#25252',
  black: '#000',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
};

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032'];

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export default theme;

```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

# Bootstrapped with 

[Gatsby Starter Portfolio: Emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma)


