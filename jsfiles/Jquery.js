$(document).ready(function(){
    
    // scroll var for smooth scrolling.
    let smScroll = $(".scroll");
    
    // open Sidebar Nav
    $('#open-sidebar-btn').click(function(){
        $('.navigation-sidebar').toggleClass('nav-active');
        $('.menu-toggle-close').fadeIn(2000);
        $('.sidebar-nav-list').fadeIn(2000);
    });
    // Close SideBar Nav
    $('#close-sidebar-btn').click(function(){
        $(this).fadeOut('fast');
        $('.sidebar-nav-list').slideDown().fadeOut(1000);
        $('.navigation-sidebar').toggleClass('nav-active');
   });

    // smooth scrolling for home page
    smScroll.click(function(e) {
        $('body, html').animate({
            scrollTop:$(this.hash).offset().top
        }, 2000);
        $('#close-sidebar-btn').fadeOut('fast');
        $('.navigation-sidebar').toggleClass('nav-active');
        e.preventDefault();
    });

});

