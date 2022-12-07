$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 0){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
  });
     //toggle menu/navbar
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     });   
});
//typing animation
var typed= new Typed(".typing",{
  strings:["Undergraduate(Computer Science)","Developer"," Graphic Designer","Video Editor"],
  typeSpeed:100,
  backSpeed:60,
  loop: true
});
var typed= new Typed(".typing2",{
  strings:["Undergraduate(Computer Science)","Developer","Graphic Designer","Video Editor"],
  typeSpeed:100,
  backSpeed:60,
  loop: true
});