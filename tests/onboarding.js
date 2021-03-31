
const onboarding = require('../test_definitions/onboarding');
// deleting the html report file from previous tests
// const fs = require('fs')
// const path = './tests_output/report.html'
// try {
//   fs.unlinkSync(path)
//   //file removed
// } catch(err) {
//   console.error(err)
// }

module.exports = {
  'Demo test Google' : onboarding.onboardingFlow
};