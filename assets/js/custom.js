$(window).scroll(function() {
    if ($(this).scrollTop() > 300){
       $('.navbar').addClass("bg-blur");
    } else {
       $('.navbar').removeClass("bg-blur");
    }
 });