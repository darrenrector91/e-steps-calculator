$(document).ready(function () {
  var focus = document.getElementById("current-esteps-input");
  focus.focus();
});

document.querySelector("#calculateBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let currentEsteps = document.getElementById("current-esteps-input").value;
  let measuredAmt = document.getElementById("measured-amount-input").value;
  let actualAmt = document.getElementById("actual-amount-input").value;

  // Calculate new E-steps
  let newEsteps = (currentEsteps * measuredAmt) / actualAmt;

  if (newEsteps > 0) {
    var roundedAmt = newEsteps.toFixed(1);
    document.getElementById("new-esteps-amount-input").value = roundedAmt;
  }
});
