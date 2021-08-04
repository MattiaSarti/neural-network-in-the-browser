let background;
let button;
let happiness_probability;
let image;
let input;
let model;
let next_color;
let style;


function getSentiment() {
  const input_text = input.value;
  const prediction = model.predict(input_text);

  return prediction.score;
}


function setup() {
  model = ml5.sentiment('movieReviews', function(){console.log("model loaded");});

  style = document.body.style;
  button = document.getElementById("button");
  input = document.getElementById("input");
  image = document.getElementById("image");

  button.addEventListener('click', updateImageBasedOnSentiment);
}


function updateImageBasedOnSentiment() {
  happiness_probability = getSentiment();

  // next_image_name = ((happiness_probability > 0.5) ? "happiness.png" : "sadness.png");
  switch (true) {

    case (happiness_probability > 0.67):
      next_image_name = "happiness.png";
      next_color = "rgb(0, 162, 255)";
      break;

    case (happiness_probability > 0.33):
      next_image_name = "neutrality.png";
      next_color = "rgb(157, 133, 87)";
      break;

    default:
      next_image_name = "sadness.png";
      next_color = "rgb(84, 115, 151)";
  }

  image.src = next_image_name;
  style.backgroundColor = next_color;
}


setup();
