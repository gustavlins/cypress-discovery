const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "18fqu2",
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: "https://buger-eats-qa.vercel.app",
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
    ],
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
