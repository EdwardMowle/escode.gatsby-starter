module.exports = {
    siteMetadata: {
        title: `EMR Gatsby Starter`,
        description: `Starter project for Gastby apps at emr.digital.`,
        author: `@emr_digital`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-svg`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `emr-gatsby-starter`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby.svg`
            }
        }
    ]
};
