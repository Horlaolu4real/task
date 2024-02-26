
document.addEventListener("DOMContentLoaded", function () {
  const firstDiv = document.querySelector(".first");
  const digits = document.querySelectorAll(".digit");

  let clickedSequence = '';

  digits.forEach((digit) => {
    digit.addEventListener("click", function () {
      const number = this.dataset.number;
      
      clickedSequence += number;

      firstDiv.innerText = clickedSequence;
    });
  });
});



