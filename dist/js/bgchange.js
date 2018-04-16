define(function(){
    function bgchange(){
        var oBox = $(".bgChange").find(".bgScroll").find(".bgBox");
        var oPic = oBox.find(".scrollPic").find(".eightPic");
        //数据加载
        $.ajax({
            url : "data/bottomPic.json",
            success : function(data){
                var aPics = "";
                for(var i = 0 ;i < data.length;i++){
                    aPics += `<li><a href=""><img src="` + data[i].img + `" alt=""></a></li>`;
                }
                oPic.html(aPics);

            }
        })
        //让轮播图动起来
        var timer = null;
        var count = 0;
        //点击右边
        oBox.find(".bgRight").click(function(){
            clearInterval(timer);
            oPic.stop().animate({
                left : "-304px"
            },1000,function(){
               oPic.find("li").eq(0).appendTo(oPic);
               oPic.css("left","0");
            })
        });
        //点击左边
        oBox.find(".bgLeft").click(function(){
            clearInterval(timer);
            oPic.stop().animate({
                left : "304px"
            },1000,function(){
               oPic.find("li").eq(7).prependTo(oPic);
               oPic.css("left","0px");
            })
        });
        //自己动起来
        timer = setInterval(move,2000);
        function move(){
            oPic.find("li").eq(0).appendTo(oPic);
            oPic.css("left","0");
            oPic.stop().animate({
                left : "-304px"
            },2000,move)

        }
        //放上去的时候不动和动
        // oPic.find("li").mouseenter(function(){
        //     // ev.stopPropagation();
        //     clearInterval(timer);
        // })
        // oPic.find("li").mouseout(function(ev){
        //     ev.stopPropagation();
        //     timer = setInterval(move,2000);
        // })

        $("#scrollPic").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(move,2000);
        })
    }
    return {
        bgchange : bgchange
    }
})