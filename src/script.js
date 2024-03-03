const obj = {
  1: {
    pageviews: "10K",
    price: 8,
    runnerWidth: 0,
    runnerExtra: 0,
  },
  2: {
    pageviews: "50K",
    price: 12,
    runnerWidth: 25,
    runnerExtra: 6,
  },
  3: {
    pageviews: "100K",
    price: 16,
    runnerWidth: 50,
    runnerExtra: 12.5,
  },
  4: {
    pageviews: "500K",
    price: 24,
    runnerWidth: 75,
    runnerExtra: 18.5,
  },
  5: {
    pageviews: "1M",
    price: 36,
    runnerWidth: 100,
    runnerExtra: 25,
  },
};

const discount = 0.25;

const pageviewsEl = document.getElementById("pageviews");
const priceEl = document.getElementById("price");

const slider = document.getElementById("slider");
const runner = document.querySelector(".runner");

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  runner.style.width = `calc(${obj[value].runnerWidth}% - ${obj[value].runnerExtra}px)`;
  const pageviews = `${obj[value].pageviews} pageviews`;
  const price = obj[value].price;
  pageviewsEl.textContent = pageviews;
  priceEl.textContent = `$${price}.00`;
  if (toggleBallEl.classList.contains("toggle-active")) {
    considerDiscount();
  }
});

const toggleContEl = document.querySelector(".toggle-container");
const toggleBallEl = document.querySelector(".toggle-ball");

toggleContEl.addEventListener("click", () => {
  toggleBallEl.classList.toggle("toggle-active");
  toggleContEl.classList.toggle("toggle-container-active");
  if (toggleBallEl.classList.contains("toggle-active")) {
    considerDiscount();
  } else {
    const val = slider.value;
    const price = obj[val].price;
    priceEl.textContent = `$${price}.00`;
  }
});

function considerDiscount() {
  const val = slider.value;
  const price = obj[val].price;
  priceEl.textContent = `$${price * (1 - discount)}.00`;
}
