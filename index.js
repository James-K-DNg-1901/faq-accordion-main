const questions = document.getElementsByTagName("h2")
const answers = document.getElementsByTagName("p")
const icons = document.getElementsByClassName("icon-plus");

questions[0].addEventListener("click", function() {
    answers[0].classList.toggle("not-show");
    icons[0].classList.toggle("icon-change");
});
questions[1].addEventListener("click", function() {
    answers[1].classList.toggle("not-show");
    icons[1].classList.toggle("icon-change");
});
questions[2].addEventListener("click", function() {
    answers[2].classList.toggle("not-show");
    icons[2].classList.toggle("icon-change");
});
questions[3].addEventListener("click", function() {
    answers[3].classList.toggle("not-show");
    icons[3].classList.toggle("icon-change");
});
document.