const starRatingContainer = document.querySelector('.star-rating');
let currentRating = 2;
for (let i = 0; i < 5; i++) {
  let star = document.createElement('i');
  star.classList.add(`${i < currentRating ? 'fa-solid' : 'fa-regular'}`, 'fa-star', 'star');
  star.addEventListener('click', () => onStarClick(i));
  star.addEventListener('mouseenter', () => onMouseEnter(i));
  star.addEventListener('mouseleave', onMouseLeave);
  starRatingContainer.appendChild(star);
}
const stars = document.querySelectorAll('.star');
function onStarClick(i) {
  currentRating = i + 1;
  fillStars(currentRating);
}
function onMouseEnter(i) {
  fillStars(i + 1);
}
function onMouseLeave() {
  fillStars(currentRating);
}
function fillStars(rating) {
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i].classList.add('fa-solid');
      stars[i].classList.remove('fa-regular');
    }
    else {
      stars[i].classList.add('fa-regular');
      stars[i].classList.remove('fa-solid');
    }
  }
}