var colorPrint=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function randomGradient(){

// 	body.style.background="linear-gradient(to right, " + color +", " +color ")";
//     colorPrint.textContent = body.style.background ;	

// }





function gradientMaker(){
	body.style.background="linear-gradient(to right, " + color1.value +", " +color2.value+")";

	colorPrint.textContent = body.style.background ;

};



color1.addEventListener("input",gradientMaker);
color2.addEventListener("input",gradientMaker);
// button.addEventListener("click",randomGradient);