const pars = document.querySelectorAll(".info");

const limit = 200;
let shortText = "";
let longText = "";

pars.forEach((item) => {
  if (item.innerHTML.length > limit) {
    shortText = item.innerText.substr(0, limit);
    longText = item.innerText.substr(limit);
    const span = document.createElement("span");
    span.innerHTML = longText;
    span.classList.add("toggle");
    item.innerHTML = shortText;
    item.appendChild(span);
    item.innerHTML += `... <button class = 'btn' >show more </button>`;
  }
});

const toggle = (e) => {
  const span = e.target.parentElement.querySelector(".toggle");
  if (span.classList.contains("show")) {
    span.classList.remove("show");
  } else {
    span.classList.add("show");
  }
};

pars.forEach((item) => {
  item.addEventListener("click", toggle);
});
