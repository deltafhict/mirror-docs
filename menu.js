//Javascript Document
//jQuery to be more specific
$(document).ready(function(){
    //Toggle 'active'-class so that the menu is shown when the button is pressed (for mobile/small screens)
    var folded = false;
    $(document).on('click', '.btn.mobilemenu', function(event){
        if (folded) {
            $("nav").removeClass("active");
        } else {
            $("nav").addClass("active");
        }
        folded = !folded;
    });
    
    $(".menuclose").click(function(){
        folded = !folded;
        $("nav").removeClass("active");
    });
    $("nav ul li a").click(function(){
        folded = !folded;
        $("nav").removeClass("active");
    });
    
    //Handling the sub-menu's
    $("nav ul li").click(function(){
        $(this).children('.submenu').slideToggle('slow');
    });
});