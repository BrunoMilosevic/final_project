import "@popperjs/core";
import * as bootstrap from "bootstrap";
import "@/scss/main.scss";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

sr.reveal(".progress-bar", {
  origin: "left",
  duration: 2500,
  distance: "100%",
  easing: "ease",
  scale: 1,
  mobile: true,
  reset: true,
});
sr.reveal(".about-in", {
  origin: "left",
  duration: 2500,
  distance: "100%",
  easing: "ease",
  scale: 1,
  mobile: true,
  reset: true,
});
sr.reveal(".portfolio-div", {
  origin: "left",
  duration: 2500,
  distance: "100%",
  easing: "ease",
  scale: 1,
  mobile: true,
  reset: true,
});
