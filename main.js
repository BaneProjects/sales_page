var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.parentElement.parentElement.querySelector(".panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//the second accordion
var acc_2 = document.getElementsByClassName("acc");
var arrows = document.getElementsByClassName("roatate_arrow");
var white_arr_mobile = document.getElementById("arrow_mobile");
for (i = 0; i < acc_2.length; i++) {
  acc_2[i].addEventListener("click", function () {
    var arrow = this.nextElementSibling;

    console.log(arrow);
    var el = this.parentElement.parentElement.querySelector(".open");
        var activeDiv = this.parentElement;
        console.log(activeDiv)
    if (el.style.maxHeight) {
      activeDiv.classList.remove("active");
      el.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
      white_arr_mobile.style.transform = "rotate(90deg)";
    
    } else {
      el.style.maxHeight = el.scrollHeight + "px";
      arrow.style.transform = "rotate(270deg)";
      activeDiv.classList.add("active");
    }
  });
}
