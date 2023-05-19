// player
function player() {
  let play = document.querySelector(".play");
  let paused = document.querySelector(".paused");
  let video_anti_age = document.querySelector(".video_anti_age");
  let play_paused = document.querySelector(".play_paused");
  let video_wrapper = document.querySelector(".video_wrapper");
  video_wrapper.addEventListener("mousemove", () => {
    play_paused.style.display = "block";
  });
  video_wrapper.addEventListener("ended", () => {
    play_paused.style.display = "block";
  });
  video_wrapper.addEventListener("mouseout", () => {
    if (video_anti_age.play) {
      play_paused.style.display = "none";
    }
    if (video_anti_age.paused) {
      play_paused.style.display = "block";
    }
  });
  play_paused.addEventListener("click", function playPause() {
    if (video_anti_age.paused || video_anti_age.playing) {
      video_anti_age.play();
      play.style.display = "none";
      paused.style.display = "none";
    } else {
      video_anti_age.pause();

      play.style.display = "block";
      paused.style.display = "none";
    }
  });
}
let play_paused = document.querySelector(".play_paused");
let video_anti_age = document.querySelector(".video_anti_age");
play_paused.addEventListener("click", function () {
  video_anti_age.play();
  video_anti_age.setAttribute("controls", "controls");

  this.style.display = "none";
});
// обновлет фотки после окончания воспроизведения
document.querySelectorAll("video").forEach((elem) => {
  elem.addEventListener("ended", function () {
    this.src = this.src;
  });
});
// видео в слайдерах what_is_there_wrapper_video
const wrapper_video = document.querySelector(".wrapper_video");
const wrapper_video_closed = document.querySelector(".wrapper_video_closed");
wrapper_video_closed.addEventListener("click", function () {
  this.parentElement.style.visibility = "hidden";
  wrapper_video.children[0].pause();
});
wrapper_video.addEventListener("click", function () {
  this.style.visibility = "hidden";
  wrapper_video.children[0].pause();
});
const what_is_there_wrapper_video = document.querySelectorAll(
  ".what_is_there_wrapper_video"
);
what_is_there_wrapper_video.forEach((elem) => {
  elem.addEventListener("click", function () {
    const numberVideo = this.getAttribute("data-video");
    wrapper_video.children[0].src = `./video/what_is_there/${numberVideo}.m4v`;
    wrapper_video.children[0].play();
    wrapper_video.style.visibility = "visible";
  });
});

let play_paused_review = document.querySelectorAll(".play_paused_review");
play_paused_review.forEach((elem) => {
  elem.previousElementSibling.addEventListener("ended", function () {
    let play_review = elem.children[0];
    play_review.style.display = "block";
    elem.style.display = "block";
    elem.previousElementSibling.removeAttribute("controls");
  });

  elem.addEventListener("click", function () {
    let play_review = this.children[0];
    let paused_review = this.children[1];
    let review_video_weapper = document.querySelectorAll(
      ".review_video_weapper"
    );
    review_video_weapper.forEach((element) => {
      swiperReviewVideo.slideTo(swiperReviewVideo.clickedIndex);
      element.children[0].pause();
    });

    if (this.previousElementSibling.paused == true) {
      this.previousElementSibling.play();
      this.style.display = "none";
      this.previousElementSibling.setAttribute("controls", "controls");
    }
  });
});

// player_end

//  chedule_intensive
let chedule_intensive_block = document.querySelectorAll(
  ".chedule_intensive_block"
);
chedule_intensive_block.forEach((elem) => {
  let header_intensive = elem.querySelector(".header_intensive");
  let list_chedule = elem.querySelector(".list_chedule");
  header_intensive.addEventListener("click", function () {
    this.classList.toggle("header_intensive_noactive");
    this.querySelector(
      ".chedule_intensive_arrows"
    ).children[0].classList.toggle("chedule_intensive_hide");
    this.querySelector(
      ".chedule_intensive_arrows"
    ).children[1].classList.toggle("chedule_intensive_hide");
    list_chedule.classList.toggle("chedule_intensive_hide");
  });
});
const btn_get_pdf = document.querySelector(".btn_get_pdf");
btn_get_pdf.addEventListener("click", function () {
  let input_chedule_intensive_post = document.querySelector(
    ".input_chedule_intensive_post"
  );
  input_chedule_intensive_post.classList.toggle("chedule_intensive_hide");
});
//  chedule_intensive_end

const marker = document.querySelectorAll(".marker");
marker.forEach((elem) => {
  elem.addEventListener("click", function () {
    this.classList.toggle("active_marker");
  });
});
const wrapper__homeSendApplication = document.querySelector(
  ".wrapper__home-send-application"
);
const homeMidle__rightBottomMobile = document.querySelector(
  ".home-midle__right-bottom-mobile"
);
homeMidle__rightBottomMobile.addEventListener("click", () => {
  wrapper__homeSendApplication.style.display = "flex";
});
const homeSenClosed = document.querySelector(".home-sen_closed");
homeSenClosed.addEventListener("click", function () {
  this.parentElement.parentElement.style.display = "none";
});
const wrapperSendEmail = document.querySelector(".wrapper-send-email");
const btnGetPdfMobile = document.querySelector(".btn_get_pdf-mobile");
const sendEmail_closed = document.querySelector(".send-email_closed");
sendEmail_closed.addEventListener("click", function () {
  this.parentElement.parentElement.style.display = "none";
});
btnGetPdfMobile.addEventListener("click", function () {
  wrapperSendEmail.style.display = "flex";
});
// faq
const faq = document.querySelectorAll("[faq-js] .item");

if (faq) {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[faq-js] .item")) {
      faq.forEach((elem) => {
        elem.classList.remove("active");
        elem.removeAttribute("active");
      });
    }
  });

  faq.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.getAttribute("active")) {
        if (e.target.closest(".item")) {
          if (!e.target.closest(".link")) {
            faq.forEach((elem) => {
              elem.classList.remove("active");
              elem.removeAttribute("active");
            });
            item.classList.remove("active");
            item.removeAttribute("active");
          }
        }
      } else {
        if (e.target.closest(".item")) {
          if (!e.target.closest(".link")) {
            faq.forEach((elem) => {
              elem.classList.remove("active");
              elem.removeAttribute("active");
            });
            item.classList.add("active");
            item.setAttribute("active", "active");
          }
        }
      }
    });
  });
}
// /
// swiper
const swiperMentoringItems = new Swiper(".swiper-mentoring-items", {
  slidesPerView: "auto",
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
      pagination: {
        el: ".swiper-pagination-mentoring-items",
        type: "bullets",
      },
    },
    670: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 40,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});

const swiperStepsExpert = new Swiper(".swiper-steps-expert", {
  slidesPerView: "auto",
  spaceBetween: 40,
  breakpoints: {
    320: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
      centeredSlides: true,
    },
    670: {
      spaceBetween: 10,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 40,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});

const swiperMentoring = new Swiper(".swiper-mentoring", {
  // Default parameters
  cssMode: true,

  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next-mentoring",
    prevEl: ".swiper-button-prev-mentoring",
  },
});
const swiperReview_more = new Swiper(".doctors_reviews_more_wrapper", {
  // Default parameters
  cssMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-review_more",
    prevEl: ".swiper-button-prev-review_more",
  },
  mousewheel: true,
  keyboard: true,
});
const swiperReview = new Swiper(".swiper-review", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-review",
        type: "bullets",
      },
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-review",
        type: "bullets",
        clickable: true,
      },
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-review",
    prevEl: ".swiper-button-prev-review",
  },
});

const swiperReviewVideo = new Swiper(".swiper-review-video", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-review-video",
    prevEl: ".swiper-button-prev-review-video",
  },
});

swiperReviewVideo.slideTo(2);
const what_is_there_one = new Swiper(".what_is_there_one", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-swiper_what_is_there_one",
    prevEl: ".swiper-button-prev-swiper_what_is_there_one",
  },
});
const what_is_there_two = new Swiper(".what_is_there_two", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-swiper_what_is_there_two",
    prevEl: ".swiper-button-prev-swiper_what_is_there_two",
  },
});
const what_is_there_three = new Swiper(".what_is_there_three", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-swiper_what_is_there_three",
    prevEl: ".swiper-button-prev-swiper_what_is_there_three",
  },
});

const swiperProgram = new Swiper(".swiper-experts-word", {
  // Default parameters
  slidesPerView: "auto",
  on: {
    // afterInit: () => {
    //   this.slideTo(0);
    // },
  },
  navigation: {
    nextEl: ".swiper-button-next-program",
    prevEl: ".swiper-button-prev-program",
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination-program",
        type: "bullets",
      },
    },
    670: {
      spaceBetween: 0,
    },
    1080: {
      spaceBetween: 30,
    },
  },
});

const swiperPersonal = new Swiper(".swiper-personal", {
  slidesPerView: "auto",
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 6,
      touchRatio: 1,
      slideToClickedSlide: false,
    },
    1080: {
      spaceBetween: 20,
      touchRatio: 0,
      slideToClickedSlide: true,
    },
  },
});
// /
const review_closed = document.querySelector(".review_closed");
review_closed.addEventListener("click", function () {
  this.parentElement.style.visibility = "hidden";
});
const doctors_reviews_more_wrapper = document.querySelector(
  ".doctors_reviews_more_wrapper"
);
const details_review = document.querySelectorAll(".details_review");
details_review.forEach((elem) => {
  elem.addEventListener("click", function () {
    swiperReview_more.slideTo(swiperReview.clickedIndex);
    doctors_reviews_more_wrapper.style.visibility = "visible";
  });
});
