function time() {
  const data = new Date();
  var seconds, minutes, hours;

  document.getElementById("data").textContent = data;

  seconds = data.getSeconds().toString();
  minutes = data.getMinutes().toString();
  hours = data.getHours().toString();

  const secondsRotation = seconds * 6;
  const minutsRotation = minutes * 6;
  const hoursRotation = hours * 30 + minutes * 0.5;

  document.documentElement.style.setProperty("--seconds", `${secondsRotation}deg`);
  document.documentElement.style.setProperty("--minutes", `${minutsRotation}deg`)
  document.documentElement.style.setProperty("--hours", `${hoursRotation}deg`);
}

// Chiamata ogni secondo
setInterval(time, 1000);

// Chiamata immediata 
time();