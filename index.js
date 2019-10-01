/* This adds an event on 'button', where when you click it, the function 'handleClick' runs.
handclick does not have a parenthesis '()', because it needs to wait until the event has occured. */

//document.querySelector("div .set").addEventListener("click", handleClick);

/* Creates a function that makes an alert saying 'I got clicked' */

// function handleClick(allButtons) {
//   alert("I got clicked!");
// }

/* Can also write this like so:
document.querySelector("button").addEventListener("click", function() {
  alert("I got clicked!")
})
This is an 'anonymous' function, and works the same, just that it can only be used in that
particular addEventListener */


/* This line of code, targets the length of the '.drum' classes array, and adds
the EventListener to each of the selectors in '.drum' until it reaches the maximum .length of the array */

/* Can also write it like this:
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
});
}
*/





for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

/* Gives the array of '.drum' the starting value of 'i', which is 0. Which then increases
by 1 each time through the array until it reaches the maximum length */
// Detecting if the button is pressed
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
/* This line of code targets the innerHTML element that is clicked on. So when you click on
the 'W' drum button, it will call 'w' with the 'innerHTML' syntax.
inside the switch (expression), you place the thing you are going to 'switch on'
In this case, the letter is what we are switching on. Because it relates to each button.  */
var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);
});

// Detecting which keyboard was pressed - "keydown" = the action, then creates the 'callback function'.
// This callback function allows to wait until something has happened eg, 'keydown'. then it calls the function.
// with the 'event' data.
// the 'event' is then superposed onto .key call, which goes into the makeSound.
document.addEventListener("keydown", function(event) {

/*Using (event) gives the thing that triggered the function. eg, a key press.
This then gets ran through the makeSound, and gives back the key press. Denoted further down in the makeSound(key) function
You don't have to call it (event), can use (e/evt) also  */
makeSound(event.key);

buttonAnimation(event.key);

});

/*For example: function sayHi(name) {
console.log("Hello" + name)
}
If you type sayHi(Jerry), the computer would respond: Hello Jerry.
Also, if you made a function called sayHi(n) {
console.log("Hello " + n) }
If you typed sayHi(Terry)
you would get Hello Terry.
}

   */

function makeSound(key) {

  switch (key) {
    case "w":
    /* The line above calls the 'buttonInnerHTML' variable, which corresponds to each individual letter
    on the buttons. The case statement tells the code what activates it. So here for example, if the 'w'
    button is clicked, innerHTML returns 'w', so this case is switched on.
    Remember to use case "what triggers it" then ':' . You then finish this loop with a 'break;' statement. */

    var tom1 = new Audio("sounds/tom-1.mp3");
   tom1.play();
  /*Here, we add a variable with the same name as the sound, create a new audio trigger and then call the Audio
  through the new variable 'tom1'.play(); Ended by a 'break;'   */
      break;

  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;

  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "j":
  var kickbase = new Audio("sounds/kick-bass.mp3");
  kickbase.play();
  break;

  case "k":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  case "l":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

    default: console.log(buttonInnerHTML);

  }
  }
}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}

// switch (buttonInnerHTML) {
//   case "w":
//   /* The line above calls the 'buttonInnerHTML' variable, which corresponds to each individual letter
//   on the buttons. The case statement tells the code what activates it. So here for example, if the 'w'
//   button is clicked, innerHTML returns 'w', so this case is switched on.
//   Remember to use case "what triggers it" then ':' . You then finish this loop with a 'break;' statement. */
//
//   var tom1 = new Audio("sounds/tom-1.mp3");
//  tom1.play();
// /*Here, we add a variable with the same name as the sound, create a new audio trigger and then call the Audio
// through the new variable 'tom1'.play(); Ended by a 'break;'   */
//     break;
//
// case "a":
// var tom2 = new Audio("sounds/tom-2.mp3");
// tom2.play();
// break;
//
// case "s":
// var tom3 = new Audio("sounds/tom-3.mp3");
// tom3.play();
// break;
//
// case "d":
// var tom4 = new Audio("sounds/tom-4.mp3");
// tom4.play();
// break;
//
// case "j":
// var kickbase = new Audio("sounds/kick-bass.mp3");
// kickbase.play();
// break;
//
// case "k":
// var snare = new Audio("sounds/snare.mp3");
// snare.play();
// break;
//
// case "l":
// var crash = new Audio("sounds/crash.mp3");
// crash.play();
// break;
//
//   default: console.log(buttonInnerHTML);
//
// }
// });
// }


//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//  this.style.color="white";
// });
// }
/* You can use the 'this' syntax to target whatever is called by the function, or the action.
"click" in this case. This code registers which element of 'i' the user clicked on, and then changes the
colour of the font to white. */

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
