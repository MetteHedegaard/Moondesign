/* Burgermenu Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* collection page change numbers Toggle between showing and hiding*/
  function changepagenumbers() {
 var element = document.getElementsByClassName("grid1");
    element.classList.toggle("hide");

    var element = document.getElementsByClassName("grid2");
    element.classList.toggle("hide");
  }