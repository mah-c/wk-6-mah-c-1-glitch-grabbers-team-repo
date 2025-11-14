const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sc1xub',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
