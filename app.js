const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
    var currentElementIndex = 0; // Başlangıçta gösterilen elementin index'i

    var listElements = document.querySelectorAll(".list1_element"); // Tüm list1_element elemanlarını seçiyoruz

    // "Evvel" butonuna tıklama olayını dinleyelim
    document.querySelector(".next").addEventListener("click", function() {
        // Eğer mevcut elemanın index'i sıfırın altındaysa, son elemana gitmesi gerekiyor
        if (currentElementIndex > 0) {
            listElements[currentElementIndex].classList.remove("active"); // Mevcut elemanın active class'ını kaldır
            currentElementIndex--; // Mevcut elemanın index'ini azalt
            listElements[currentElementIndex].classList.add("active"); // Yeni mevcut elemana active class'ı ekle
        }
    });

    // "Sonra" butonuna tıklama olayını dinleyelim
    document.querySelector(".prav").addEventListener("click", function() {
        // Eğer mevcut elemanın index'i son elemanın index'inden küçükse, bir sonraki elemana gitmesi gerekiyor
        if (currentElementIndex < listElements.length - 1) {
            listElements[currentElementIndex].classList.remove("active"); // Mevcut elemanın active class'ını kaldır
            currentElementIndex++; // Mevcut elemanın index'ini artır
            listElements[currentElementIndex].classList.add("active"); // Yeni mevcut elemana active class'ı ekle
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  // Geri sayımı başlatmak için son tarihi belirleyin (milisaniye cinsinden)
  var countDownDate = new Date("Aprel 13, 2024 4:00:00").getTime();

  // Her saniyede bir geri sayımı güncellemek için bir interval tanımlayın
  var x = setInterval(function() {
      // Şu anki tarihi alın
      var now = new Date().getTime();
      
      // Son tarih ile şu anki tarih arasındaki farkı hesaplayın
      var distance = countDownDate - now;
      
      // Gün, saat, dakika ve saniye hesaplayın
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // var milliseconds = Math.floor(distance % 1000);
      
      // Geri sayımı HTML içeriğine yerleştirin
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
      
      // Eğer geri sayım tamamlanmışsa, interval'i temizleyin ve metni değiştirin
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "Geri sayım tamamlandı!";
      }
  }, 1000); // Her milisaniyede güncelle
});
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