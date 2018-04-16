define(function(){
    function registertop(){
        $(document).scroll(function(){
            if($(document).scrollTop() == 0){
                $(".logo").find("img").css("display","block");
            }else if($(document).scrollTop() > 0 && $(document).scrollTop() < 165){
                      $(".logo").find("img").css("display","block");
            }else  if($(document).scrollTop() > 165){
                     $(".logo").find("img").css("display","none");
                 }

        })
    }
    return {
        registertop: registertop
    }
})