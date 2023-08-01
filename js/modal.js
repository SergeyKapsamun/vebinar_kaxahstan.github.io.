jQuery(document).ready(() => {
  jQuery(".phone-mask").mask("+7 (999) 999-99-99");

  jQuery("[data-modal]").on("click", function (e) {
    e.preventDefault();
    const id = jQuery(this).attr("data-modal");
    openModal(id);
  });
  jQuery("[data-modal-close]").on("click", function (e) {
    e.preventDefault();
    const id = jQuery(this).attr("data-modal-close");
    closeModal(id);
  });

  jQuery(".home_midle_right_bottom").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_1", getDataForm($(this)));
  });
  jQuery("#send-request .modal__form").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_1", getDataForm($(this)));
  });
  jQuery(".right_block").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_1", getDataForm($(this)));
  });
  jQuery(".faq_form").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_1", getDataForm($(this)));
  });
  jQuery(".input_chedule_intensive_post").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_2", getDataForm($(this)));
  });
  jQuery("#get-programm .modal__form").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_2", getDataForm($(this)));
  });
  // jQuery(".accept_button").on("submit", function (e) {
  //   e.preventDefault();
  //   sendMail("form_3", getDataForm($(this)));
  // });
  jQuery("#feedback .modal__form").on("submit", function (e) {
    e.preventDefault();
    sendMail("form_3", getDataForm($(this)));
  });

  setTimeout(() => {
    replaceModalPhone();
  }, 1000);
});

jQuery(window).resize(replaceModalPhone);
function replaceModalPhone() {
  if (jQuery(window).outerWidth() > 500) {
    jQuery(".header__btn").attr("data-modal", "feedback");
  } else {
    jQuery(".header__btn").attr("data-modal", "phone-mobile");
  }
}

function openModal(modalId) {
  jQuery("body").css("overflow", "hidden");
  jQuery(".modal").removeClass("active");
  jQuery(`#${modalId}`).addClass("active");
}
function closeModal(modalId) {
  jQuery("body").css("overflow", "auto");
  jQuery(`#${modalId}`).removeClass("active");
}

function getDataForm($form) {
  let data = {};
  $form.find("input").each((i, el) => {
    let $el = jQuery(el);
    let name = $el.attr("name").trim();
    let val = $el.val().trim();
    data[name] = val;
  });
  return data;
}

function sendMail(form, data) {
  jQuery.ajax({
    type: "POST",
    url: "/wp-content/themes/main/sendMail.php",
    data: {
      ...data,
      form,
    },
    success: () => {
      openModal("thanks");
    },
    error: () => {
      openModal("error");
    },
  });
}
