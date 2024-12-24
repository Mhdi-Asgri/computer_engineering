"use strict";
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

const name = document.getElementById("name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const comp_name = document.getElementById("comp_name");
const req_type = document.getElementById("req_type");
const req_text = document.getElementById("req_text");
const submitBtn = document.getElementById("submit_btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value.trim().length <= 2) {
    name.placeholder = "نام باید بیشتر از 2 حرف باشد";
    name.style.borderColor = "red";
  } else {
    name.style.borderColor = "gray";
    name.placeholder = "نام";
  }

  if (last_name.value.trim().length <= 2) {
    last_name.placeholder = "نام خانوادگی باید بیشتر از 2 حرف باشد";
    last_name.style.borderColor = "red";
  } else {
    last_name.style.borderColor = "gray";
    last_name.placeholder = "نام خانوادگی";
  }

  const phoneValue = phone.value.replace(" ", "").trim();
  if (phoneValue.length < 10 || isNaN(phoneValue)) {
    phone.placeholder = "شماره موبایل نامعتبر است";
    phone.style.borderColor = "red";
  } else {
    phone.style.borderColor = "gray";
    phone.placeholder = "شماره موبایل";
  }

  if (comp_name.value.trim().length <= 2) {
    comp_name.placeholder = "نام شرکت باید بیشتر از 2 حرف باشد";
    comp_name.style.borderColor = "red";
  } else {
    comp_name.style.borderColor = "gray";
    comp_name.placeholder = "نام شرکت";
  }

  const emailValue = email.value.trim();
  if (
    !emailValue.includes("@") ||
    !emailValue.includes(".") ||
    emailValue.indexOf("@") > emailValue.lastIndexOf(".") ||
    emailValue.indexOf("@") <= 1
  ) {
    email.placeholder = "آدرس ایمیل نامعتبر است";
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "gray";
    email.placeholder = "آدرس ایمیل";
  }
});
