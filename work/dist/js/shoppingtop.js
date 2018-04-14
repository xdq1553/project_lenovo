
define(function(){
    //头部的显隐以及各种特效
    function shoppingtop(){
        $(document).scroll(function(){
            if($(document).scrollTop() == 0){

                $("#header").css({
                    "position":"absolute",
                    "top":0,
                    "zIndex" : "999"
                });

                $(".logo").find("img").css("display","block");
                $("#logo").find("img").css("display","none");
                $("#right").find(".search").css({
                    "background":"rgba(88,88,88,0.3)",
                     "border":"none",
                });

                $("#search_1").css("background","rgba(88,88,88,0.03)");


            }else if($(document).scrollTop() > 0 && $(document).scrollTop() < 165){
                      $("#header").css({
                        "top":"-70px",
                        "transition":"1s",
                        "zIndex" : "999"
                    });
                      $("#header").find(".top").css("display","block");
                      $(".logo").find("img").css("display","block");
                      $("#logo").find("img").css("display","none");
                      $(".icon1").css("backgroundPosition","-72px -77px");
                      $(".icon2").css("backgroundPosition","-9px -96px");

            }else  if($(document).scrollTop() > 165){

                     $("#header").css({
                        "position":"fixed",
                        "top":0,
                        "transition":"1s",
                        "zIndex" : "999"
                    });
                     $("#header").find(".top").css("display","none");
                     $(".logo").find("img").css("display","none");
                     $("#logo").find("img").css("display","block");
                     $(".icon1").css("backgroundPosition","-72px -77px");
                     $(".icon2").css("backgroundPosition","-9px -96px");
                     $("#right").find(".search").css({
                        });
                      $("#search_1").css({
                        });


                 }

        })
    }

    return {
        shoppingtop : shoppingtop
    }

})

