/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://averoai.tech",
    generateRobotsTxt: true,
    sitemapSize: 7000,

    // Adds trailing slash like /about/
    trailingSlash: false,

    // Good for SEO and consistent crawling
    changefreq: "weekly",
    priority: 0.7,

    // Exclude admin routes if any
    exclude: ["/admin/*", "/api/*"],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};
