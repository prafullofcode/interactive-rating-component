const ratingStateContainer = document.querySelector(".rating-state-box");
const thankyouStateContainer = document.querySelector(".thankyou-state-box");
const ratingNumberContainer = document.querySelectorAll(
  ".rating-number-container"
);
const selectedRating = document.querySelector("#selected-rating");

const submitButton = document.querySelector(".submit-btn");
let rated = false;
let rating = 0;
let ratingElement = new Array();
for (let i = 0; i < 5; i++) {
  ratingElement[i] = document.querySelector(`#rating-${i + 1}`);
  ratingElement[i].addEventListener("click", function () {
    if (rated === true) {
      for (let i = 0; i < 5; i++) {
        if (i + 1 == rating) {
          ratingElement[i].style.backgroundColor = ` var(--dark-blue)`;
          ratingElement[i].style.color = `var(--light-grey)`;
        }
      }
    }
    rated = true;
    rating = i + 1;
    ratingElement[i].style.backgroundColor = `orange`;
    ratingElement[i].style.color = `white`;
  });
}

submitButton.addEventListener("click", function () {
  if (rating == 0) {
    alert("Please rate before submitting");
  } else {
    ratingStateContainer.classList.add("hidden");
    selectedRating.textContent = `${rating}`;
    thankyouStateContainer.classList.remove("hidden");
  }
});
