import data from "./data.js";

let images = [];

data.forEach((element, index) => {
  images[index] = new Image();
  images[index].src = element.img;
});

export default images;
