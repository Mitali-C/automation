exports.onboardingFlow = (browser) => {
  const page = browser.page.onboarding();
    page
    .navigate()
    .useXpath()
    // check if newsletter modal is visible
    .waitForElementVisible('@newsletter_modal', 10000)
    // add an email to signup for the newsletter
    .setValue('@newsletter_input', 'test@email.com')
    .click('@newsletter_submit')
    // once submitted, wait for success message for newsletter signup
    .waitForElementVisible('@newsletter_signup_success_msg', 10000)
    // close the newsletter modal
    .click('@close_newsletter_btn')
    // go to the shorter flow
    .click("//*[contains(text(),'I have an idea')]")
    // check if second question comes up on the screen and verify its the corect question
    .waitForElementVisible('@question1', 10000)
    .assert.containsText('@question1', 'Upload anything related to your idea')
    // google search and select images
    .click('@google_search_button')
    .waitForElementVisible('@google_search_modal', 10000)
    .setValue('@google_search_input', 'minimalistic chair')
    .click('@google_search_btn')
    .waitForElementVisible('@google_search_result_1', 10000)
    .click('@google_search_result_1')
    // check if submit button for google search modal is enabled
    .assert.attributeEquals('@google_select_submit_btn', 'disabled', null)
    .click('@google_select_submit_btn')
    // continue to the next question
    .waitForElementVisible('@continue_btn', 10000)
    .click('@continue_btn')
    // check if login modal shows up
    .waitForElementVisible('@login_modal', 10000)
    // enter the login credentials
    .setValue('@login_modal_email', 'mitali.chaudhari98@gmail.com')
    .setValue('@login_modal_password', '123456')
    .click('@login_button')
    // wait for next question to come up and check if it the correct question
    .waitForElementVisible('@question2', 10000)
    .assert.containsText('@navbar_signout_text', 'Sign Out') // checking if the user is logged in correctly 
    .assert.containsText('@question2', 'How many do you want to create?')
    .click('@q2_option1')
    // wait for next question to come up and check if it the correct question
    .waitForElementVisible('@question3', 10000)
    .assert.containsText('@question3', 'What do you want to call this project?')
    .setValue('@canvas_title', 'Automation test Canvas')
    .assert.attributeEquals('@continue_btn', 'disabled', null)
    .click('@continue_btn')
    .waitForElementVisible('@question4', 10000)
    .assert.containsText('@question4', 'What is your project story?')
    .setValue('@canvas_details', 'Automation testing in progress...')
    .assert.attributeEquals('@continue_btn', 'disabled', null)
    .click('@continue_btn')
    .waitForElementVisible('@canvas_submit_btn', 10000)
    .click('@canvas_submit_btn')
    .waitForElementVisible('@waitlist_modal', 10000)
    // .pause(10000)
    .end();
}