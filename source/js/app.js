window.onload = function() {
  let menu = document.getElementById("menu");
  let burger = document.getElementById("burger-img");
  let cross = document.getElementById("cross-img");

  menu.hidden = true;
  burger.hidden = false;

  document.getElementById("burger").onclick = function(){
    menu.hidden = !menu.hidden;
    burger.hidden = !burger.hidden;
    cross.hidden = !cross.hidden;
  }
}
