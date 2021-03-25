

describe('Ecosia', function() {
  test('demo test', function(browser) {
    const page = browser.page.onboarding();
    page
    .navigate()
    .useXpath()
    .click("//*[contains(text(),'I have an idea')]")
    .waitForElementVisible('@question', 1000)
    .assert.containsText('@question', 'Upload anything related to your idea')
    .click('@google_search_button')
    .waitForElementVisible('@google_search_modal', 3000)
    .setValue('@google_search_input', 'minimalistic chair')
    .click('@google_search_btn')
    .waitForElementVisible('@google_search_result_1', 3000)
    .click('@google_search_result_1')
    .assert.attributeEquals('@google_select_submit_btn', 'disabled', null)
    .click('@google_select_submit_btn')
    .waitForElementVisible('@continue_btn', 1000)
    .click('@continue_btn')
    .waitForElementVisible('@newsletter_modal', 10000)
    .setValue('@newsletter_input', 'test@email.com')
    .click('@newsletter_submit')
    .waitForElementVisible('@newsletter_signup_success_msg', 10000)
    .pause(10000)
    .end();
  });

});