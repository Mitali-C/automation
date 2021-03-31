module.exports={
  url: 'https://staging.naya.studio',
  elements: {
    question1:{
      selector: 'div.message',
      index: 1
    },
    google_search_button: {
      selector:'.buttons-container .row .col button',
      index: 0
    },
    google_search_modal: '.modal-content',
    google_search_input: '.modal-content .modal-body form input[type=text]',
    google_search_btn: '.modal-content .modal-body form input[type=submit]',
    google_search_result_1:{
      selector: '.react-photo-gallery--gallery .image-renderer',
      index:1
    },
    google_select_submit_btn: '.modal-footer button',
    continue_btn: '.continue-skip-container .continue-btn',
    newsletter_modal:'#newsletter-modal',
    newsletter_input: '#newsletter-modal .modal-content .modal-body input',
    newsletter_submit: '#newsletter-modal .modal-content .modal-body button',
    newsletter_signup_success_msg: '#newsletter-modal .modal-content .modal-body p',
    close_newsletter_btn:'#newsletter-modal .modal-content .modal-header button',
    login_modal: '#login-modal',
    login_modal_email: '#login-modal .modal-body .form-container input[type=email]',
    login_modal_password: '#login-modal .modal-body .form-container input[type=password]',
    login_button:'#login-modal .modal-body .form-container .sign-in-button',
    navbar_signout_text: '.top-nav-rhs div p',
    question2:{
      selector: 'div.message',
      index: 2
    },
    q2_option1:{
      selector:'.unselected-option .unselected-image-wrapper',
      index:0
    },
    question3:{
      selector: 'div.message',
      index: 3
    },
    canvas_title: '#story input',
    question4:{
      selector: 'div.message',
      index: 4
    },
    canvas_details: '#story textarea',
    canvas_submit_btn: '.submit-button',
    waitlist_modal:'#whitelist-modal'
  },
  commands: [{
  }]
}