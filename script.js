// flags

const nav = document.getElementById("nav");

nav.addEventListener("click", (event) => {
  nav
    .querySelectorAll("a")
    .forEach((element) => element.classList.remove("active"));
  event.target.classList.add("active");
});

// flags scroll

// document.addEventListener("scroll", (event) => {
//   const scroll = window.scrollY;
//   const divCollection = document.querySelectorAll("main>section>.flag_margin");
//   const navCollection = document.querySelectorAll("#nav a");

//   divCollection.forEach((element) => {
//     if (element.offsetTop <= scroll) {
//       navCollection.forEach((a) => {
//         a.classList.remove("active");
//         if (
//           element.getAttribute("id") === a.getAttribute("href").substring(1)
//         ) {
//           a.classList.add("active");
//         }
//       });
//     }
//   });
// });

// screen lock

const wallpaper_v = document.getElementById("layer_v");
const wallpaper_h = document.getElementById("layer_h");

document.getElementById("square_v").addEventListener("click", () => {
  if (wallpaper_v.classList.contains("none")) {
    wallpaper_v.classList.remove("none");
  } else {
    wallpaper_v.classList.add("none");
  }
});
document.getElementById("square_h").addEventListener("click", () => {
  if (wallpaper_h.classList.contains("none")) {
    wallpaper_h.classList.remove("none");
  } else {
    wallpaper_h.classList.add("none");
  }
});

// slider

const slides = document.querySelectorAll("#slides .slide");
const sliderSection = document.getElementById("slider");
const chev_l = document.getElementById("chev_l");
const chev_r = document.getElementById("chev_r");
const slide_1 = document.querySelector(".slide_1");
const slide_2 = document.querySelector(".slide_2");

let activeSlide = 0;

chev_l.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  if (slides[activeSlide].classList.contains("slide_1")) {
    sliderSection.style.backgroundColor = "#648bf0";
    sliderSection.style.borderBottomColor = "#adc5db";
    slide_2.classList.remove("disable");
    slide_1.classList.add("disable");
    slides[activeSlide].classList.remove("active_slide_l");
    slides[activeSlide - 1].classList.add("active_slide_r");
  } else {
    sliderSection.style.backgroundColor = "#f06c64";
    sliderSection.style.borderBottomColor = "#ea676b";
    slide_1.classList.remove("disable");
    slide_2.classList.add("disable");
    slides[activeSlide].classList.remove("active_slide_r");
    slides[activeSlide + 1].classList.add("active_slide_l");
  }
});
chev_r.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  if (slides[activeSlide].classList.contains("slide_1")) {
    sliderSection.style.backgroundColor = "#648bf0";
    sliderSection.style.borderBottomColor = "#96c5f2";
    slide_2.classList.remove("disable");
    slide_1.classList.add("disable");
    slides[activeSlide].classList.remove("active_slide_l");
    slides[activeSlide - 1].classList.add("active_slide_r");
  } else {
    sliderSection.style.backgroundColor = "#f06c64";
    sliderSection.style.borderBottomColor = "#ea676b";
    slide_1.classList.remove("disable");
    slide_2.classList.add("disable");
    slides[activeSlide].classList.remove("active_slide_r");
    slides[activeSlide + 1].classList.add("active_slide_l");
  }
});

let portfolio_pics = document.getElementById("portfolio_pics");
let portfolio_nav = document.getElementById("portfolio_nav");

let pics = [];

//portfolio pics border

Array.from(
  document.getElementById("portfolio_pics").querySelectorAll("li")
).forEach((element) => pics.push(`${element.classList}`));

portfolio_pics.addEventListener("click", (event) => {
  portfolio_pics
    .querySelectorAll("li")
    .forEach((element) => element.classList.remove("border_portfolio"));

  portfolio_pics.querySelectorAll("li").forEach((element) => {
    if (element === event.target) {
      element.classList.add("border_portfolio");
    }
  });
});

// iq over 100000000 sorry ))0)
// random pics in portfolio

portfolio_nav.addEventListener("click", (event) => {
  portfolio_nav
    .querySelectorAll("p")
    .forEach((element) => element.classList.remove("portfolio_active"));
  event.target.classList.add("portfolio_active");

  pics = pics.sort(function () {
    return Math.random() - 0.5;
  });

  portfolio_pics
    .querySelectorAll("li")
    .forEach((elem) => elem.classList.remove(`${elem.classList.item(0)}`));
  portfolio_pics
    .querySelectorAll("li")
    .forEach((elem, index) => elem.classList.add(`${pics[index]}`));
});

// get a quote

const button = document.getElementById("button");

const closeButton = document.getElementById("close-button");

button.addEventListener("click", (event) => {
  const describe = document.getElementById("describe").value.toString();
  const subject = document.getElementById("subject").value.toString();

  const name = document.getElementById("name").value.toString();
  const email = document.getElementById("email").value.toString();

  const sliced_subj = subject.slice(0, 20);
  const sliced_describe = describe.slice(0, 20);

  if (name !== "" && email.includes("@")) {
    if (describe === "") {
      document.getElementById("descriptionResult").innerText = "No description";
    } else {
      if (sliced_describe.length < describe.length) {
        document.getElementById(
          "descriptionResult"
        ).innerText = sliced_describe.concat("...");
      } else {
        document.getElementById("descriptionResult").innerText = describe;
      }
    }
    if (subject === "") {
      document.getElementById("subjectResult").innerText = "No subject";
    } else {
      if (sliced_subj.length < subject.length) {
        document.getElementById("subjectResult").innerText = sliced_subj.concat(
          "..."
        );
      } else {
        document.getElementById("subjectResult").innerText = subject;
      }
    }
    document.getElementById("message-block").classList.remove("hidden");
    event.preventDefault();
  }
});

closeButton.addEventListener("click", () => {
  document.getElementById("subjectResult").innerText = "";
  document.getElementById("descriptionResult").innerText = "";

  document.querySelector("form").reset();

  document.getElementById("message-block").classList.add("hidden");
});

const burger = document.getElementsByClassName("burger");
const blur = document.getElementsByClassName("blur");
const left = document.getElementsByClassName("left");
