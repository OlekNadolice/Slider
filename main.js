import data from "./data.js";
import images from "./preloadImages.js";

let progressBarPercentages = 0;
let currentSlider = 1;
const containerContent = document.querySelector(".container__content");

setInterval(() => {
  intervalHandler();
}, 1200);

const intervalHandler = () => {
  const progressBar = document.querySelector(".filled");

  if (containerContent.classList.contains("slideAnimation")) {
    containerContent.classList.remove("slideAnimation");
  }

  if (progressBarPercentages === 100) {
    progressBarPercentages = 0;
    progressBar.style.transition = "none";
    handleSlideChange();
  } else {
    progressBarPercentages += 20;
    progressBar.style.transition = "linear 1.2s ";
  }

  progressBar.style.width = `${progressBarPercentages}%`;
};

const handleSlideChange = () => {
  if (currentSlider === 3) {
    currentSlider = 1;
  } else {
    ++currentSlider;
  }
  insertContentToScreen();
};

const insertContentToScreen = () => {
  const title = document.querySelector(".content__title");
  const subtitle = document.querySelector(".content__subtitle");
  const description = document.querySelector(".content__description");
  const contentDocs = document.querySelectorAll(".content__doc");
  let img = document.querySelector("img");

  title.textContent = data[currentSlider - 1].title;
  subtitle.textContent = data[currentSlider - 1].subtitle;
  description.textContent = data[currentSlider - 1].description;
  img.src = data[currentSlider - 1].img;
  containerContent.classList.add("slideAnimation");

  contentDocs.forEach((element, index) => {
    if (index === currentSlider - 1) {
      element.classList.add("content__doc--active");
    } else {
      element.classList.remove("content__doc--active");
    }
  });
};
