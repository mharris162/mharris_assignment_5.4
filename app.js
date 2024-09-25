// For Loop- loop will run until end of list
const names = ["Mack", "Louis", "Eliza","Brick"];
for (name of names) {
    if (name === "Mack"){
        console.log("Mack is in my list!")
    }
    console.log(` Hello There ${name}`);

};

const meals = ["Beef Stew", "Chicken Pot Pie", "Chili", "Chicken and Dumplings"];

for (meal of meals){
    console.log(`For dinner, we will be eating ${meal}`)
};



//While Loop

let loading = 0;
while (loading < 100){
    console.log("Website is still loading");
    loading++;
}

//change CSS with Javascript 

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function(){
text.classList.toggle("change");

})


//Change CSS based upon a variable value

var bttn = document.querySelector(".bttn");
//console.log(bttn);
var rootStyles = getComputedStyle(bttn);
var color = rootStyles.getPropertyValue("color");
console.log("color:", color);
let colorValue = "#008000";
bttn.style.setProperty('color', colorValue);



//var bttn = document.querySelector(".bttn");
//console.log(bttn);
var rootStyles = getComputedStyle(bttn);
var background = rootStyles.getPropertyValue("background-color");
console.log("background-color:", background);
let backgroundValue = "#ffff00";
bttn.style.setProperty('background-color', backgroundValue);




