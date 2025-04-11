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
        disallow: ["/_next/", "/api/", "/videos", "/images"],
      },
    ],
    additionalSitemaps: ["https://andyduong.work/sitemap.xml"],
  },
};
