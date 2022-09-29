
function getDate() {
  let cDate=newDate();
  document.getElementById("DATE").innerHTML = cDate.toString();
  setInterval('getDate()', 1000);
}