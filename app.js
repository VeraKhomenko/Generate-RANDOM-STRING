"use strict";
// let characters = /0/g;

function create_random_string() {
  let string_length = 5;
  let random_string = "";
  let characters = "ABCabc1234567890";
  //   let characters = /w/g;
  for (let i = 0; i < string_length; i++) {
    random_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return random_string;
}

function randomStringGenerator() {
  let random_string = create_random_string();
  let color = "#461220";

  let strReverse = random_string.split("").reverse().join("");
  if (strReverse == random_string) {
    color = "red";
  }
  let isNumbersOnly = /^\d+$/.test(random_string);
  if (isNumbersOnly) {
    color = "blue";
  }
  let hasZero = /0/g.test(random_string);

  if (!hasZero) {
    document.getElementById("string_inner_container").innerHTML = random_string;
    document.getElementById("string_inner_container").style.color = color;
  }
}

setInterval(randomStringGenerator, 3000);
