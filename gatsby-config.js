module.exports = {
    siteMetadata: {
      title: `Folded Clothes`,
      siteUrl: `https://www.foldedclothes.com`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`
        }
      }  
    ],
} 