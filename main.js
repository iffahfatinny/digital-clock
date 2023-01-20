var time = setInterval(startTime,1000);

function startTime(){
  const date = new Date();
  document.getElementById("date").innerHTML = date.toDateString();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}