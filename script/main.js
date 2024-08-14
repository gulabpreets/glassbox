
    function getTotalHeight(element) {
        const style = window.getComputedStyle(element);
        
        const marginTop = parseFloat(style.marginTop);
        const marginBottom = parseFloat(style.marginBottom);
        const height = element.offsetHeight; // includes padding and borders
        
        return height + marginTop + marginBottom;
    }

    var header = document.getElementById("header");

    const totalHeight = getTotalHeight(header)+50;

    window.addEventListener("scroll", function() {
        header.classList.toggle("hSticky", window.scrollY > totalHeight);
    });
    // ----------------------------
    // ----------------------------

    var typed = new Typed('#changingText', {
        strings: ['TECHNOLOGY', 'DESIGN', 'EXPERIENCE', 'INNOVATION','CREATIVE'],
        typeSpeed: 60,
        backSpeed: 30, // Speed of backspacing
        loop: true, // Enable looping
        backDelay: 1000, // Time before backspacing
        startDelay: 500, // Time before typing starts
        showCursor: true, // Show cursor
        cursorChar: '|', // Character for cursor
    });



    function changeBackgroundColor() {
        const colors = ['#f8da1d', '#fec3de', '#92d7c3', '#fe871f','#febf86'];
        const spanElement = document.getElementById('changingText');
        let currentColorIndex = 0;

        setInterval(() => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            spanElement.style.backgroundColor = colors[currentColorIndex];
        }, 2500);
    }
    document.addEventListener('DOMContentLoaded', changeBackgroundColor);


    // <!-- Initialize Swiper -->
    // <!-- Initialize Swiper -->
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



// ----------------------------------
// header js       
// ----------------------------------   

var headerBar = document.getElementById("resHB")
var ResponsiveHeader = document.getElementById("ResponsiveHeader");
var headerCross = document.getElementById("resHC");

headerBar.addEventListener("click", function(){
  headerBar.style.display = "none";
  ResponsiveHeader.style.display = "block";
  headerCross.style.display = "block";

})

headerCross.addEventListener("click", function(){
  ResponsiveHeader.style.display = "none";
  headerCross.style.display = "none";
  headerBar.style.display = "block";
});

