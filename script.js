function nextStep() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}

function right() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").innerHTML =
    "<h2>You chose right 💕</h2><p>You’re officially my favorite kind of sweet.</p>";
}

function wrong() {
  alert("Wrong chocolate 😏 Try again!");
}
