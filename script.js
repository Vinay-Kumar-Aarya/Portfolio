$(document).ready(function(){
  // Navbar sticky
  $(window).scroll(function(){
    if(this.scrollY > 20) $(".navbar").addClass("sticky");
    else $(".navbar").removeClass("sticky");

    if(this.scrollY > 500) $(".scroll-up-btn").addClass("show");
    else $(".scroll-up-btn").removeClass("show");
  });

  // Scroll top
  $(".scroll-up-btn").click(function(){
    $("html").animate({scrollTop:0},"slow");
  });

  // Toggle menu
  $(".menu-btn").click(function(){
    $(".navbar ul").toggleClass("active");
  });

  // Theme toggle
  $(".theme-toggle").click(function(){
    $("body").toggleClass("dark");
    $(this).find("i").toggleClass("fa-moon fa-sun");
  });

  // Typed text
  new Typed(".typing",{
    strings:["Web Developer","Android Developer","Freelancer","Learner"],
    typeSpeed:100,backSpeed:60,loop:true
  });

  // AOS init
  AOS.init({duration:1000,once:true});

  // Contact form (dummy)
  $("#contact-form").submit(function(e){
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    this.reset();
  });
});
