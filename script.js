var css  = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =  document.getElementById("gradient");



// // metode 1
// color1.addEventListener("input", function(){
//    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
// })
// color2.addEventListener("input", function(){
//     body.style.background ="linear-gradient(to right," +color2.value +" ," +color2.value +")";
// })



//  metode 2 
// u can using name whatever uwant in function
// function setGradie(){
//     body.style.background =
//     "linear-gradient(to right,"
//     + color1.value
//     +","
//     + color2.value
//     +")";


// }

// color1.addEventListener("input",setGradie);
// color2.addEventListener("input",setGradie);




// metode 3
// take javascript in HTML tag with "oninput"
function setWarna(){
    body.style.background =
    "linear-gradient(to right,"
    + color1.value
    +","
    + color2.value
    +")";
    // make bottom
    css.textContent = body.style.background +";";
}

color1.addEventListener("input",setWarna);
color2.addEventListener("input",setWarna);