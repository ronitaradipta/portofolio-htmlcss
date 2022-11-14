// Dropdown Menu Mobile

function dropDown() {
  let btnToggle = document.getElementById("btn-toggle");
  let navigation = document.getElementById("nav-list");
  btnToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Scroll top

const scrollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
