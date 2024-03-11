document.getElementById("akademiyaSelect").addEventListener("change", function() {
    var selectedOption = this.value; // Seçilen seçeneğin değerini al
    var u17Div = document.querySelector(".u17");
    var u14Div = document.querySelector(".u14");
  
    if (selectedOption === "u17") {
        u17Div.style.display = "block";
        u14Div.style.display = "none";
    } else if (selectedOption === "u14") {
        u17Div.style.display = "none";
        u14Div.style.display = "block";
    }
  });
  function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".nav_list");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none"; // Nav list de kapansın
    } else {
        x.style.display = "block";
        y.style.display = "flex"; // Nav list de açılsın
    }
}