//RNG Function
var num1;
var num2;
var num3;

var letter;

var minProd;
var hours;
var minutes;

function rng() {
  num1 = Math.ceil(Math.random() * 21);
  num2 = Math.ceil(Math.random() * 21);
  num3 = Math.ceil(Math.random() * 21);

  letter = String.fromCharCode(num1 + 'A'.charCodeAt(0));
  minProd = num2 * num3;

  hours = Math.floor(minProd / 60);
  minutes = minProd % 60;

  document.getElementById('result1').innerHTML = num1;
  document.getElementById('result2').innerHTML = num2;
  document.getElementById('result3').innerHTML = num3;
}

function bigSub(num1, num2, num3) {
  let highestVoted;
  
  switch (true) {
    case num1 >= num2 && num1 >= num3:
      highestVoted = "Persona 3";
      break;
    case num2 > num1 && num2 > num3:
      highestVoted = "Persona 4";
      break;
    case num3 > num1 && num3 > num2:
      highestVoted = "Persona 5";
      break;
    case num2 == num3:
      highestVoted = "Persona 4 and Persona 5";
      break;
    default:
      highestVoted = "idk then";
      break;
  }
  
  document.getElementById('bigSub').innerHTML = "The highest voted game is " + highestVoted;
}

function writeThemDown() {

document.getElementById('startLetter').innerHTML = "The name of the most experienced Persona 4 player in the survey starts with the letter: " + letter;

document.getElementById('timeTaken').innerHTML = "The time taken by them to beat Adachi in Persona 4 is " + hours + " hours and " + minutes + " minutes " + "(" + minProd + " minutes)";
}

rng();