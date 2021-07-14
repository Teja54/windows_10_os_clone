const time = document.querySelector(".time");

time.textContent = formatAMPM(new Date());

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const showBtn = document.querySelector(".hidden_icon");
const icons = document.querySelector(".icons");
showBtn.addEventListener("click", () => {
  icons.classList.toggle("show_icons");
});

const nav = document.getElementById("nav");
const startBtn = document.getElementById("start");
const btns = document.querySelectorAll(".sub_menu_item");
const links = document.querySelectorAll(".sub_menu_links");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    links.forEach((link) => link.classList.toggle("open"));
  })
);
startBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
