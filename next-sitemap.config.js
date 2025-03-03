/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://andyduong.work",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
