/*
Specs.
  for each number in range 1 to input:
    1. if number%15===0 replace with "pingpong"
    2. if number%5===0 replace with "pong"
    3. if number%3===0 replace with "ping"
*/


// Business Logic
function pingPong(numberInput){
  /*

  A function that takes a number from the user and forEach number in the
  ranging starting from 1 to the number itself it will replace all numbers that
  are divisible by both 3 & 5 with "pingpong" and thos divisible only by 3 with
  "ping" and only divisible by 5 with "pong"

  The function returns a Array

  */
  var numberResultList = [];//initial empty array that will form the final output
  if(typeof(parseInt(numberInput))!='number'){
    numberResultList.push("This function will only work with Intergers");
  }else if(numberInput<3){
    numberResultList.push("This fuction isn't magical when used with a number lower than 3");
  }else {
    for(var number = 1;number<=numberInput;number++){
      if(number%5===0 && number%3===0){
        numberResultList.push("pingpong");
      }else if(number%3===0){
        numberResultList.push("ping");
      }else if(number%5===0){
        numberResultList.push("pong");
      }else{
        numberResultList.push(number);
      }
    };
  };
  return numberResultList;
};
// User Interface Logic
$(document).ready(function(){
  /*
  When the document finishes loading:
  1. User can enter input in the given input box
  2. User then submits a value
  3. The pingPong function is called on the input value.
  4. Loop through the result of the function and populate the DOM with output.

  has a hack to clear previous output by playing around with .text and .append methods
  */
  $("form").submit(function(event){
    //the following only runs on submit
    event.preventDefault();

    var userInput = $("#userinput").val();//take the number as passed by user
    var output = pingPong(userInput);//action on the input

    // Manipulate the DOM
    $(".results").text("");//clear the .results div
    $(".results").append("<ul>");//opening <ul> tag
    output.forEach(function(item){
      // loops through output(which is a list) to generate content for the list elements
      console.log(item);
      $(".results").append("<li>"+item+"</li>");
    })
    $(".results").append("</ul>");//closing </ul> tag
    $(".results").show();//show the .results div that was previously hidden in css


  });
});
