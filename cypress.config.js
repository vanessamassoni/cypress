const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://primeng.org/setup",

    viewportWidth: 1200,
    viewportHeight: 760,
    pageLoadTimeout: 9000000,
    defaultCommandTimeout: 40000, //tempo default de espera do cypress alterado para 40 segundos
    env: {

      apiServer: "http://",
      db: {
        host: "imsis",
        user: "imsi",
        jdbc: "jdbc:"
      }

    },
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
     // allureWriter(on, config);
      return config;

    }

  },
});
