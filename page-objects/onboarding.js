module.exports={
  url: 'https://staging.naya.studio',
  elements: {
    question:{
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
    newsletter_signup_success_msg: '#newsletter-modal .modal-content .modal-body p'
  },
  commands: [{
  }]
}