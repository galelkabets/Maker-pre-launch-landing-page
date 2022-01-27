const inputRef = document.querySelector("#email");
const errorMessage = document.querySelector("#footer__error");
const submitBtn = document.querySelector("#submit");
const testimonials = document.querySelector(".testimonials");

const toggleError = (text) => {
  errorMessage.removeAttribute("hidden");
  errorMessage.innerHTML = text;
};

submitBtn.addEventListener("click", () => {
  if (!inputRef.value) return toggleError("input must not be empty");
  if (!inputRef.value.includes("@")) return toggleError("not a valid email!");
  errorMessage.setAttribute("hidden", true);
});
