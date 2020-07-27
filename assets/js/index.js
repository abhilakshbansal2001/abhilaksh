$(window).on('load',()=>{
    $(".loader-wrapper").fadeOut(500).delay(700);
});

var mixer = mixitup('.container-mix');

const x = $('main').position();
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > x.top || document.documentElement.scrollTop > x.top) {
        $(".navigation").addClass("active");
    } else {
        $(".navigation").removeClass("active");
    }
  }


$('.carousel').carousel({
    interval: 2000
  })

  //ANIMATION on d 1st section header.


//   var waypoint = new Waypoint({
//     element: document.querySelector('.navigation'),
//     handler: function(direction) {
//         scrollFunction();
//     },
//     offset: '-100vh' 
//   })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  arrowFunction();
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".navigation").addClass("active");
    // console.log($(".logo").src);
    // $(".logo").attr("src" , "img/sign2.png");
  } else {
    $(".navigation").removeClass("active");
    // $(".logo").attr("src" , "img/sign-w.png");

  }

}

mybutton = document.querySelector(".upper-arrow");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

function arrowFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $(".upper-arrow").fadeIn();
  } else {
    $(".upper-arrow").fadeOut();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// ###################### work###################3

const work_link = document.querySelectorAll(".work-link");

function under(e){
  // console.log("clicked");
  // console.log(work_link);
  work_link.forEach(link => {
    link.classList.remove("active");
  });
  // e.target.classList.add("active")
 e.classList.add("active");
}

// work_link.forEach(link => {
//   link.addEventListener("click",underLine);
// });




$(".work_link").click(function(){
  console.log("clicked");
})