//轮播图
define(function(){
    function shoppingbanner(){
        var aLis = $("#banner").find(".banner_1").find("ol").find("li");
        var aPics = $("#banner").find("ul").find("li");

//按钮的实现


//设置按钮的显隐
        $("#banner").on("mouseover",".banner_1",function(){
            $(this).find(".icon2_1").css({
                "display":"block",
                "left":$(document).scrollLeft(),
            })
             $(this).find(".icon2_2").css({
                "display":"block",
                "right":$("#banner").width()-$(window).width()-$(document).scrollLeft(),
            })
        })
         $("#banner").on("mouseout",".banner_1",function(){
            $(this).find(".icon_2").css({
                "display":"none",
            });
        })


//加载数据
         $.ajax({
            url: "../data/data_1.json",
            success:function(res){
                // console.log(res);
                for(var i = 0; i < res.length;i++){
                    //加载数据
                    $("#banner").find("ul").find("li").eq(i).find("a").css({
                        // "display" : "none",
                        // "position":"absolute",
                        "height": "408px",
                        "background":`url(` + res[i].img + `) no-repeat center center`,
                        "backgroundSize" : "100% 100%",

                    });
                    $("#banner").find("ol").find(".point").css({
                        "borderRadius":"3px",
                        "width":"54px",
                        "background":"#fff"
                    });
                }

//点击动画

                var count_1 = 6;
                var count = 0;
                var timer = null;


//自动动画
                timer = setInterval(timeInner,3000);
                function timeInner(){
                    count++;
                    bannerMove(count);
                }

                $("#banner").find(".icon2_1").click(function(){
                    clearInterval(timer);
                    count --;
                    bannerMove(count);

                })
                 $("#banner").find(".icon2_2").click(function(){
                    clearInterval(timer);
                    count ++;
                    bannerMove(count);

                })
                 for(var i = 0;i< 6 ;i++){
                     $("#banner").find(".banner_1").find("ol").find("li").eq(i).mouseover(function(){
                    clearInterval(timer);
                    var  _i = $(this).index();
                    bannerMove(_i);
                })
                 }



//移入移除定时器的改变
                $("#banner").find(".banner_1").hover(function(){
                    clearInterval(timer);
                },function(){
                    timer = setInterval(timeInner,3000);
                })

                //动画轮播封装
                function bannerMove(index){
                    for(var i = 0;i < 6;i++){
                        //图片的改变取消样式
                        $("#banner").find("ul").find("li").eq(i).attr("class","");
                        $("#banner").find("ol").find("li").eq(i).attr("class","");
                        $("#banner").find(".banner_1").find("ul").find("li").eq(i).find("a").css({"opacity":0.5});
                         $("#banner").find(".banner_1").find("ul").find("li").eq(i).css({
                            "position":"absolute",
                            "zIndex":0
                        });

                        $("#banner").find("ol").find("li").eq(i).css("background","#383838");
                        $("#banner").find("ol").find("li").eq(i).stop().animate({
                            "borderRadius":"50%",
                            "width":"8px"
                        },20);

                    }
//增加对应样式
                    $("#banner").find("ul").find("li").eq(index % 6).attr("class","active");
                    $("#banner").find("ol").find("li").eq(index % 6).attr("class","point");
                    $("#banner").find(".banner_1").find("ul").find(".active").find("a").animate({"opacity":1},400);
                     $("#banner").find(".banner_1").find("ul").find(".active").css("zIndex",666);

                     $("#banner").find("ol").find(".point").css("background","#fff");
                     $("#banner").find("ol").find(".point").stop().animate({
                            "borderRadius":"3px",
                            "width":"54px"
                        },800);

                }
        }
    })

}
    return {
        shoppingbanner : shoppingbanner
    }
})
