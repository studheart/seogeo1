export const SITE = {
  website: "https://seogeo.in", // your domain
  author: "Arun Nath J",
  profile: "https://seogeo.in",
  desc: "SEO, GEO & AI search strategies to rank on Google and get cited in AI answers.",
  title: "SEO GEO",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false, // disable this (no need to show edit link)
    text: "Edit page",
    url: "https://github.com/studheart/seogeo1/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata", // updated to India
} as const;
