function clocker() {
  const fullDate = new Date();
  var hour = fullDate.getHours();
  if (hour < 10)
    hour = "0" + hour;
  var minutes = fullDate.getMinutes();
  if (minutes < 10)
    minutes = "0" + minutes;
  var seconds = fullDate.getSeconds();
  if (seconds < 10)
    seconds = "0" + seconds;
  
  document.getElementById('hour').innerHTML = hour + "";
  document.getElementById('minute').innerHTML = minutes + "";
  document.getElementById('second').innerHTML = seconds;  
}

setInterval(clocker, 200);
