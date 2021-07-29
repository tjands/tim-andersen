module.exports = {
    siteMetadata: {
        description: "Personal page of Tim Andersen",
        locale: "en",
        title: "Tim Andersen",
        // formspreeEndpoint: "https://formspree.io/f/{your-id}",
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "dark-blue",
            },
        },
    ],
}