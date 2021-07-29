module.exports = {
    // pathPrefix:"/tim-andersen",
    siteMetadata: {
        description: "Personal page of Tim Andersen",
        locale: "en",
        title: "Tim Andersen",
        showThemeLogo: false,
        formspreeEndpoint: "https://formspree.io/f/xvodwzvw",
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