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
  video_wrapper.addEventListener("mouseout", () => {
    if (video_anti_age.play) {
      play_paused.style.display = "none";
    }
    if (video_anti_age.paused) {
      play_paused.style.display = "block";
    }
  });
  play_paused.addEventListener("click", function playPause() {
    if (video_anti_age.paused) {
      this.style.display = "none";
      video_anti_age.play();
      play.style.display = "none";
      paused.style.display = "block";
    } else {
      video_anti_age.pause();
      this.style.display = "block";
      play.style.display = "block";
      paused.style.display = "none";
      play_paused.style.display = "block";
    }
  });
}

let play_paused_review = document.querySelectorAll(".play_paused_review");
play_paused_review.forEach((elem) => {
  elem.addEventListener("click", function () {
    let play_review = this.children[0];
    let paused_review = this.children[1];

    if (
      this.previousElementSibling.playing ||
      this.previousElementSibling.paused
    ) {
      this.previousElementSibling.play();
      paused_review.style.display = "none";
      play_review.style.display = "none";
    } else {
      this.previousElementSibling.pause();
      paused_review.style.display = "block";
      play_review.style.display = "none";
    }
  });
});

player();
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
  slidesPerView: 1,
  spaceBetween: 70,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-mentoring",
    prevEl: ".swiper-button-prev-mentoring",
  },
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
    670: {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-review",
        type: "bullets",
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
const swiperWhatIsThere = new Swiper(".swiper_what_is_there", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next-swiper_what_is_there",
    prevEl: ".swiper-button-prev-swiper_what_is_there",
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
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-program",
        type: "bullets",
      },
    },
    670: {
      spaceBetween: 10,
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
