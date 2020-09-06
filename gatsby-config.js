module.exports = {
    siteMetadata: {
      description: "Personal page of Luke Miles",
      locale: "en",
      title: "Luke Miles",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "dark-blue",
        },
      },
    ],
    pathPrefix: "/lukemiles-gatsby-site"
  }