import pkg from "./package.json" with { type: "json" };

export default {
  name: pkg.name,

  triggers: {
    keywords: [
      "flight",
      "flights",
      "airfare",
      "flight comparison",
      "ticket price",
      "airline reviews",
      "compare flights",
    ],
  },

  query_format: {
    regex: [
      "flight fare from (.+) to (.+)",
      "compare flights between (.+) and (.+)",
      "flights from (.+) to (.+)",
      "ticket rates and reviews (.+)",
    ],
  },

  client: {
    location: pkg.module,
    moduleName: pkg.umdName || "HD" + pkg.name,
    baseURL: "/" + pkg.name,
  },

  format: {
    mainline: true,
    sidebar: true,
  },

  permissions: {},

  info: {
    description:
      "Compare flight prices, journey duration, stops, and airline experience.",
    category: "travel",
  },

  github: "",
  demovideo: "",
};
