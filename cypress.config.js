const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 240000,
  chromeWebSecurity: false,
  video: false,
  
  e2e: {
    specPattern: "cypress/e2e/**/*.{feature,js}",
    setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
    // implement node event listeners here
    },
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
});


// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     experimentalStudio: true
//   }
// })


