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
        "https://www.google.com/",
        "https://www.google.com/advanced_search",
        "https://duckduckgo.com/",
      ],
      numberOfRuns: 1,
      assert: {
        //preset: "lighthouse:recommended",
        assertions: {
          "categories:performance": ["error", { minScore: 0.25 }],
          "categories:accessibility": ["warn", { minScore: 0.55 }],
        },
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
