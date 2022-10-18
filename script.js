var screen = document.getElementById('screen');
var output = document.getElementById("output");
var buttons = document.querySelectorAll('button');
for (Mybtn of buttons) { Mybtn.addEventListener("click", function (text){
var  btntext = text.target.innerText;
if(btntext=="AC"){
   screen.value="";
   output.value="";
}
else if(btntext=="="){
  var total = eval(screen.value);
output.value = total;
}
else if(btntext=="C"){

    screen.value = screen.value.substr(0,screen.value.length -1);

}
else{
    screen.value = screen.value + btntext;
}

})
    
}




