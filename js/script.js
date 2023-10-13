const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active untuk search form

const modalBox = document.querySelector(".modal");
const eyeBtns = document.querySelectorAll(".eye-btn");

eyeBtns.forEach((btn) => {
  btn.onclick = (e) => {
    modalBox.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".close-icon").onclick = (e) => {
  modalBox.style.display = "none";
  e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik any space to erase the ham-menu
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");
const sp = document.querySelector("#cart-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sp.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

window.onclick = (e) => {
  if (e.target === modalBox) {
    modalBox.style.display = "none";
  }
};
