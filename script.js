$(document).ready(function(){
//declaring object of cat body
var catBody = {};
//making an array for the catResponses which is a property of catBody
catBody.catResponses = ["The cat purrs.", "CAT ATTACK", "The cat meows.", "You get a sweet kitty blink.", "The cat rolls over.", "CAT ATTACK"];

//making a method for catBody.whatCatDoes
catBody.whatCatDoes = function(){
//assigning random number
  var randomNumber = Math.random();
//making randomNumber respond to the number of items in catResponses array
  var randomNumberArray = randomNumber * this.catResponses.length;
//rounding the random number down to a workable number for the positions of the  array
  var randomIndex = Math.floor(randomNumberArray);
//pulling a random string response
  var randomResponse = this.catResponses[randomIndex];
//jquery to return results to html
  if (randomResponse != "CAT ATTACK")
    {$("#catReact").text(randomResponse);
    } else{
$("#catReact").text("YOU'RE FUCKED, DUDE.");}
};
//link the button
var petTheCat = document.getElementById('petTheCat');
//function that links button to prompt
var whereToPetCat = function()
{
  petTheCat = prompt("Where would you like to pet the cat?");
  catBody.whatCatDoes();
};
//use jquery to link button to fire it's function with a click
$("#petTheCat").click(whereToPetCat);

	});
