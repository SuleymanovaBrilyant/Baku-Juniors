function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".nav_list");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none"; 
    } else {
        x.style.display = "block";
        y.style.display = "flex"; 
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');
  
    videos.forEach(function (video) {
      video.addEventListener('play', function (event) {
        const currentVideo = event.target;
        
        videos.forEach(function (otherVideo) {
          if (otherVideo !== currentVideo) {
            otherVideo.pause();
          }
        });
      });
    });
  });
  // function myFunction() {
  //   var x = document.getElementById("myLinks");
  //   var y = document.querySelector(".nav_list");
  //   if (x.style.display === "block") {
  //       x.style.display = "none";
  //       y.style.display = "none"; // Nav list de kapansın
  //   } else {
  //       x.style.display = "block";
  //       y.style.display = "flex"; // Nav list de açılsın
  //   }
  // }