let ham_meni = document.getElementById("meni");
let close_img = document.querySelector(".close");
let header = document.querySelector(".header");
let hum_items = document.querySelectorAll(".hum_item");
ham_meni.addEventListener("click", function () {
  header.classList.add("open");
});
close_img.addEventListener("click", function () {
  header.classList.remove("open");
});

hum_items.forEach((hum) => {
  hum.addEventListener("click", function () {
    header.classList.remove("open");
  });
});
