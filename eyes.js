// eyeballs animations

var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};

// this functions change the monster and background color

function myFunction1() {
  document.body.style.backgroundColor = "#14495e";
  document.getElementById('monster').style.backgroundImage = "url('./images/monster1.svg')";
}

function myFunction2() {
  document.body.style.backgroundColor = "#e6f2ff";
  document.getElementById('monster').style.backgroundImage = "url('./images/monster2.svg')";
}

function myFunction3() {
  document.body.style.backgroundColor = "#891359";
  document.getElementById('monster').style.backgroundImage = "url('./images/monster3.svg')";
}