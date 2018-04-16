define(function(){
    function minstar(){
        var aLis = $(".air").find(".minstar").find("ul").find("li");
        aLis.find("a").hover(function(){
            $(this).find("img").eq(0).css("display","none");
            $(this).find("img").eq(1).css("display","inline");
            $(this).find("p").css("color","rgb(91,91,91)");
        },function(){
            $(this).find("img").eq(0).css("display","inline");
            $(this).find("img").eq(1).css("display","none");
            $(this).find("p").css("color","rgb(156,156,156)");
        })
    }
    return {
        minstar:minstar
    }
})