$(document).ready(function(){
    
   $(window).scroll(function(){
 $("header").toggleClass("scrolled",$(this).scrollTop()>80)
});

 AOS.init({
  offset: 100,
  duration: 800,
});
    
document.querySelector(".circle1").addEventListener("click",function(){
    document.querySelector(".testimonial-content1").classList.add("active");
    document.querySelector(".testimonial-content3").classList.remove("active");
    document.querySelector(".testimonial-content3").classList.remove("active");
});

document.querySelector(".circle2").addEventListener("click",function(){
    document.querySelector(".testimonial-content2").classList.add("active");
    document.querySelector(".testimonial-content1").classList.remove("active");
    document.querySelector(".testimonial-content3").classList.remove("active");
});

document.querySelector(".circle3").addEventListener("click",function(){
    document.querySelector(".testimonial-content3").classList.add("active");
    document.querySelector(".testimonial-content2").classList.remove("active");
    document.querySelector(".testimonial-content1").classList.remove("active");                                              
});

    $(".mobile-icon").click(function(){
        $(".mobile-menu").toggleClass("open-mobile")
    })

    
});
function closeNav(){
     $(".mobile-menu").removeClass("open-mobile");
}











