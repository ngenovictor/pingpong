function pingPong(numberInput){
  var numberResultList = [];
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

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userinput").val();
    var output = pingPong(userInput);
    console.log(userInput+": "+output);
    $(".results").text("");
    $(".results").append("<ul>");
    output.forEach(function(item){
      console.log(item);
      $(".results").append("<li>"+item+"</li>");
    })
    $(".results").append("</ul>");
    $(".results").show();


  });
});
