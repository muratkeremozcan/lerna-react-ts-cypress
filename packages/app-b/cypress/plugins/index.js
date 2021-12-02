/// <reference types="cypress" />

module.exports = (on, config) => {
  // recommendation from Jennifer to work around the CI issue when running e2e and component tests together
  if (config.testingType === 'component') {
    require('@cypress/react/plugins/react-scripts')(on, config)
  }
  return config
}