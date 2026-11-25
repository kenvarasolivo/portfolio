import { translations } from "./i18n.js";
import "./motion.js";
import { projectLatestOrder } from './project-dates.js';

let saved;
try {
  saved = localStorage.getItem("lang");
} catch {
  /* Optional preference. */
}
let language = ["en", "de"].includes(saved) ? saved : "en";

function updateCount() {
  const count = document.querySelector("[data-project-count]");
  if (count) {
    const visible = [...document.querySelectorAll("[data-category]")].filter(
      (card) => !card.hidden,
    ).length;
    count.textContent = `${visible} ${language === "de" ? "Projekte" : "projects"}`;
  }
}

function applyLanguage(lang) {
  if (!["en", "de"].includes(lang)) return;
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[element.dataset.i18n]?.[lang];
    if (value != null) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* Optional preference. */
  }
  updateCount();
}

document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => applyLanguage(button.dataset.lang)),
  );
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((filter) =>
        filter.setAttribute("aria-pressed", String(filter === button)),
      );
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.context !== button.dataset.filter;
    });
    document.querySelectorAll('[data-project-group]').forEach((group) => {
      group.hidden = ![...group.querySelectorAll('[data-category]')].some((card) => !card.hidden);
    });
    updateCount();
  }),
);

const categoryGroups = document.querySelector('[data-category-groups]');
const dateGrid = document.querySelector('[data-date-grid]');
if (categoryGroups && dateGrid) {
  // Move the same cards so reading order, keyboard order and visual order agree.
  const cards = [...categoryGroups.querySelectorAll('article[data-project]')];
  const homeGrid = new Map(cards.map(card => [card, card.parentElement]));
  const ranks = new Map(projectLatestOrder.map((id, index) => [id, index]));
  const byLatest = [...cards].sort((a, b) =>
    (ranks.get(a.dataset.project) ?? Infinity) - (ranks.get(b.dataset.project) ?? Infinity));

  document.querySelector('[data-project-sort]').hidden = false;
  document.querySelectorAll('[data-sort]').forEach(button => {
    button.addEventListener('click', () => {
      const isDate = button.dataset.sort === 'date';
      const ordered = isDate ? byLatest : cards;
      ordered.forEach(card => (isDate ? dateGrid : homeGrid.get(card)).append(card));
      categoryGroups.hidden = isDate;
      dateGrid.hidden = !isDate;
      document.querySelectorAll('[data-sort]').forEach(control =>
        control.setAttribute('aria-pressed', String(control === button)));
      document.querySelectorAll('[data-project-group]').forEach(group => {
        group.hidden = ![...group.querySelectorAll('[data-category]')].some(card => !card.hidden);
      });
      updateCount();
    });
  });
}
const nav = document.querySelector(".editorial-nav");
const updateNav = () =>
  nav?.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
applyLanguage(language);
