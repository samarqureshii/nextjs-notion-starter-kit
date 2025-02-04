import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ba546181b6364500b248d095059239ed',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Samar Qureshi',
  domain: 'samarq.org',
  author: 'Samar Qureshi',

  // open graph metadata (optional)
  description: 'Samar Portfolio',

  // social usernames (optional)
  github: 'samarqureshii',
  linkedin: 'samar-qureshi',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    
    {
      title: 'About',
      pageId: 'd952a31a71964e058a659fe15d096ba1' 
    },
    // {
    //   title: 'Blog',
    //   pageId: 'c7ff669d84984a7ebed8417ae321e609'
    // },

    {
      title: 'Notes',
      pageId: '8bb95e344491446ca4acd52ac4f654af'
    },

    // {
    //   title: 'Plants',
    //   pageId: '9e4bdbea7f104aa2a572a9a4e19925a6'
    // }

  ]
})
