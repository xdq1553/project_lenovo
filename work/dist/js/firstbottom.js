define(function(){
    function firstbottom(){
        var oPic = $(".footer").find(".footMid").find("li").eq(4).find("ol").find("li");
        var count = 0;

        for(var i = 0 ;i < oPic.length;i++){
            oPic.eq(i).find("a").find("p").eq(1).css("display","none");
            oPic.eq(i).hover(function(){
                $(this).find("a").find("p").eq(0).css("display","none");
                $(this).find("a").find("p").eq(1).css("display","block");
                $(this).find("a").css({
                    "transform" : "rotate(360deg)",
                    "transition": "3s",
                });
            },function(){
                $(this).find("a").find("p").eq(1).css("display","none");
                $(this).find("a").find("p").eq(0).css("display","block");
                $(this).find("a").css({
                    "transform" : "rotate(-360deg)",
                    "transition": "3s",

                });
            })
        }

        //微博百度
        for(var i = 0;i < $("#mid").find("a").length;i++){
            $("#mid").find("a").eq(i).find("p").hover(function(){
                $(this).css("backgroundPositionY","-155px");
            },function(){
                $(this).css("backgroundPositionY","-130px");
            })
        }

        //国家显隐
        $("#bottom").find(".china").hover(function(){
            $("#bottom").find(".country").show();
        },function(){
            $("#bottom").find(".country").hide();
        })
        $("#bottom").find(".country").hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        });

    }
    return {
        firstbottom : firstbottom
    }
})