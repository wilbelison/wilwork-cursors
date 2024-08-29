const variantsButtons = document.querySelectorAll("button");
const test = document.getElementById("test");

variantsButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveClass(e.target.dataset.class);
    e.target.setAttribute("active", "");
  });
});

const setActiveClass = (classes) => {
  variantsButtons.forEach((button) => button.removeAttribute("active"));
  test.setAttribute("class", classes);
};
