module.exports = {
  ci: {
    collect: {
      url: [
        // "https://www.srijan.net/",
        // "https://www.srijan.net/digital-consulting-services",
        // "https://www.srijan.net/product-engineering-services#contentSticky",
        // "https://www.srijan.net/application-modernization-services",
        // "https://www.srijan.net/knowledge",
        // "https://www.srijan.net/studio",
        // "https://www.srijan.net/case-study",
        // "https://www.google.com/",
        // "https://www.google.com/advanced_search",
        // "https://duckduckgo.com/",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/entertainment",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/news/sections",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/news/topic/topic-news",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/taxonomy/term/10211",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/taxonomy/term/9726",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/current-affairs-landing-page",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/video/zaichuangshijidi50jiqitangzhongfanaotangjituan-34441",
        "https://mediacorp%23%40cms:mediacorp%40%23%211%23@stg-www.8world.com/taxonomy/term/10731",
      ],
      numberOfRuns: 1,
      assert: {
        //preset: "lighthouse:recommended",
        assertions: {
          // "categories:performance": ["error", { minScore: 0.25 }],
          "categories:accessibility": ["warn", { minScore: 0.55 }],
        },
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
