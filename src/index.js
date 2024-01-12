import "./scss/guide.scss";
import "./scss/first.scss";
import "./web-component.js";

document.querySelector("#go-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
