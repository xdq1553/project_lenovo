
define(function(){
    //头部的显隐以及各种特效
    function top(){
        $(document).scroll(function(){
            if($(document).scrollTop() == 0){

                $("#header").css({
                    "position":"absolute",
                    "top":0,
                    "background": "rgba(255,255,255,0)",
                    // "color":"#fff",
                });
                $("#downMenu").find("p").css({
                    "color":"#898989",
                    "background" : "rgba(255,255,255,1)"
            });
                $(".logo").find("img").css("display","block");
                $("#logo").find("img").css("display","none");
                $("#nav").find("li").find("a").css("color","#fff");
                $("#right").find(".search").css({
                    "background":"rgba(88,88,88,0.3)",
                     "border":"none",
                });
                $("#person").find(".a_1").css("color","#fff");
                $("#bussis").find(".a_1").css("color","#fff");

                $("#search_1").css("background","rgba(88,88,88,0.03)");
                $("#person").find(".icon3").css("backgroundPosition","-142px -72px");
                $("#bussis").find(".icon4").css("backgroundPosition","-142px -72px");

            }else if($(document).scrollTop() > 0 && $(document).scrollTop() < 200){
                 // $("#header").fadeIn(500);
                      $("#header").css({
                        "top":"-70px",
                        "transition":"1s",
                    });
                      $("#downMenu").css("color","#898989");
                      $(".logo").find("img").css("display","block");
                      $("#logo").find("img").css("display","none");
                      $(".icon1").css("backgroundPosition","-72px -77px");
                      $(".icon2").css("backgroundPosition","-9px -96px");

            }else  if($(document).scrollTop() > 200){

                     $("#header").css({
                        "position":"fixed",
                        "top":0,
                        "transition":"1s",
                        "background": "#fff",
                    });
                     $("#downMenu").css("color","#898989");
                     $("#person").find(".a_1").css("color","#000");
                     $("#bussis").find(".a_1").css("color","#000");
                     $(".logo").find("img").css("display","none");
                     $("#logo").find("img").css("display","block");
                     $("#nav").find("li").find("a").css("color","#000");
                     $(".icon1").css("backgroundPosition","-111px -77px");
                     $(".icon2").css("backgroundPosition","-38px -96px");
                     $("#right").find(".search").css({
                        "background":"rgba(255,255,255,1)",
                        "border":"1px solid #ccc",
                        });
                      $("#search_1").css({
                        "background":"rgba(255,255,255,1)",
                        });
                    $("#person").find(".icon3").css("backgroundPosition","-155px -72px");
                    $("#bussis").find(".icon4").css("backgroundPosition","-155px -72px");

                 }

        })
    }

    return {
        top : top
    }

})

