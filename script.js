const modes = {
  clarity: {
    title: "Clarity in motion",
    copy: "Quiet proportions, a low command center, and immediate response make the car feel deliberate before it feels dramatic.",
    statA: "04",
    statALabel: "featured model",
    statB: "310 mi",
    statBLabel: "range focus",
    image: "assets/images/polestar-4-detail-a.jpeg",
    alt: "Polestar 4 detail in Oxford"
  },
  distance: {
    title: "Long range, low drama",
    copy: "The best electric miles feel uneventful: stable, efficient, and visually calm enough to make speed feel almost architectural.",
    statA: "310 mi",
    statALabel: "EPA range up to",
    statB: "RWD",
    statBLabel: "range tune",
    image: "assets/images/polestar-4-detail-b.jpeg",
    alt: "Polestar 4 rear detail in Oxford"
  },
  force: {
    title: "Performance without volume",
    copy: "The quick version is still precise: all-wheel drive grip, instant torque, and the kind of acceleration that arrives without theatrics.",
    statA: "544 hp",
    statALabel: "power up to",
    statB: "3.7 sec",
    statBLabel: "0-60 mph",
    image: "assets/images/polestar-3-800v.jpeg",
    alt: "Polestar 3 with 800V architecture"
  }
};

const tabs = document.querySelectorAll(".mode-tab");
const title = document.querySelector("#brief-mode-title");
const copy = document.querySelector("#brief-mode-copy");
const statA = document.querySelector("#brief-stat-a");
const statB = document.querySelector("#brief-stat-b");
const statALabel = statA?.nextElementSibling;
const statBLabel = statB?.nextElementSibling;
const image = document.querySelector("#brief-image");

function setMode(modeName) {
  const mode = modes[modeName];
  if (!mode) return;

  tabs.forEach((tab) => {
    const active = tab.dataset.mode === modeName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  title.textContent = mode.title;
  copy.textContent = mode.copy;
  statA.textContent = mode.statA;
  statB.textContent = mode.statB;
  statALabel.textContent = mode.statALabel;
  statBLabel.textContent = mode.statBLabel;

  image.classList.add("is-switching");
  window.setTimeout(() => {
    image.src = mode.image;
    image.alt = mode.alt;
    image.classList.remove("is-switching");
  }, 140);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setMode(tab.dataset.mode));
});
