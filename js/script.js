function pingPong(numberInput){
  var result = "";
  if(!typeof(number)==='number'){
    console.log("This function will only work with Intergers");
  }else if(number<3){
    console.log("This fuction isn't magical when used with a number lower than 3");
  }else {
    for(var number = 1;number<=numberInput;number++){
      if(number%5===0 && number%3===0){
        result = "pingpong";
      }else if(number%3===0){
        result = "ping";
      }else if(number%5===0){
        result = "pong";
      }else{
        result = number;
      }
      console.log(result);
    };
  };
};
