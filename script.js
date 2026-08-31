const header = document.querySelector(`header`);
const menuBtn = document.querySelector(`.menu-btn`);
menuBtn.addEventListener(`click`, () => {
  header.classList.toggle(`open-header`);
});

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => io.observe(el));
function toggleFaq(headEl) {
  const item = headEl.parentElement;
  const wasOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item.open")
    .forEach((el) => el.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
}
