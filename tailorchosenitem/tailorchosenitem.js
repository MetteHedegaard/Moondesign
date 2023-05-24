/* Burgermenu Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// function colorFunction() {
//   document.getElementById("imgOne").style.filter = "grayscale(0%)";
//   document.getElementById("imgTwo").style.filter = "grayscale(0%)";
//   document.getElementById("imgThree").style.filter = "grayscale(0%)";
// }


// function colorFunction(element) {
//   // Remove the grayscale filter from the clicked image
//   element.style.filter = "grayscale(0%)";

//   // Apply the grayscale filter to the other images - variablen er 'images' og billedet hentes ved 'this' i gridtailor klassen
//   // for = forloop 
//   // variablen I er = 0 
//   // if variablen 'images' ikke er det samme som 'element'  og element er = 0, hvis ikke det er det, så skal den have farve
//   var images = document.getElementsByClassName("gridtailor")[0].getElementsByTagName("img");
//   for (var i = 0; i < images.length; i++) {
//     if (images[i] !== element) {
//       images[i].style.filter = "grayscale(100%)";
//     }
//   }
// }

