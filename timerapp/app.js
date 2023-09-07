function displaytime() {
  var data = new Date();
  var hours = data.getHours();
  var minutes = data.getMinutes();
  var second = data.getSeconds();
  var toogle = document.getElementById("toogle");
  if (hours >= 12) {
    toogle.innerHTML = "PM";
  } else {
    toogle.innerHTML = "AM";
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = second;
}
setInterval(displaytime, 10);
