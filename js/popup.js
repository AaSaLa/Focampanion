document.getElementById("openNav").addEventListener("click", openNav);
document.getElementById("closeNav").addEventListener("click", closeNav);
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}