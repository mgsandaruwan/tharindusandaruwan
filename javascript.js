$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
    })
   
});
