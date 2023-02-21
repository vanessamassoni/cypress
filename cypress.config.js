const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://awsultrage",

    viewportWidth: 1200,
    viewportHeight: 760,
    pageLoadTimeout: 9000000,
    defaultCommandTimeout: 40000, //tempo default de espera do cypress alterado para 40 segundos
    env: {

      apiServer: "http://awsultrage",
      db: {
        host: "imsis",
        user: "imsi",
        jdbc: "jdbc:"
      }

    },
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;

    }

  },
});
