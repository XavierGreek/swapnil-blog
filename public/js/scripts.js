const navSlide = () =>{
     const burger = document.querySelector('.burger');
     const nav=document.querySelector('.nav-links');

     burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-active');
     });
}
$(function() {
     $(window).on("scroll", function() {
         if($(window).scrollTop() > 80) {
             $(".header").addClass("active");
         } else {
             //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("active");
         }
     });
 });

navSlide();