define(function(){
    function starpro(){
        var starBox = $(".newStar").find(".starBox");
        var aLis = starBox.find(".starHeader").find(".starHeaderRight").find("li");
        var starProLeft = starBox.find(".starBottom").find(".starPro").find(".starProLeft");
        var starProRight = starBox.find(".starBottom").find(".starPro").find(".starProRight").find("ul").find("li");
        var index = 0 ;
        starBox.find(".starBottom").css({


        })
        //加载数据
        $.ajax({
            url:"data/starPro.json",
            success:function(data){
                // console.log(data);
                //加载数据
                var html = "";
                for(var i = 0;i < data.length;i++){
                    html += `<div class="starPro"><div class="starProLeft"><a href=""><img src="` +data[i].leftPic + `" alt=""></a></div><div class="starProRight"><ul><li><a href=""><img src="` + data[i].right_1 + `" alt=""></a></li><li><a href=""><img src="` + data[i].right_2 + `" alt=""></a></li><li><a href=""><img src="` +data[i].right_3 + `" alt=""></a></li><li><a href=""><img src="` + data[i].right_4 + `" alt=""></a></li></ul></div></div>`;
                    starBox.find(".starBottom").html(html);
                    starBox.find(".starBottom").find(".starPro").css({
                        "display" : "none",
                        "position" : "absolute",
                        "top" : 0,
                        "left" : 0,
                        "width" : "1200px",
                        "height" : "782px",

                        });
                    starBox.find(".starBottom").find(".starPro").eq(0).addClass("change");
                    starBox.find(".starBottom").find(".change").css("display","block");
                    aLis.eq(0).css("color","#434242");
                }




            }
        })
        //设置效果
        var timer = null;
        for(var i = 0 ;i < aLis.length;i++){
            //触摸改变
            aLis.eq(i).mouseover(starchange);
            //动画函数
            function starchange(){
                clearInterval(timer);
                starBox.find(".starBottom").find(".starPro").css("display","none");
                var index = $(this).index();
                $(this).css("color","#434242");
                aLis.not($(this)).css("color","#a4a3a3");
                starBox.find(".starBottom").find(".starPro").eq(index).addClass("change");
                starBox.find(".starBottom").find(".starPro").not(starBox.find(".starBottom").find(".starPro").eq(index)).removeClass("change");
                //添加图片触摸放大
                starBox.find(".starBottom").find(".change").find(".starProRight").find("ul").addClass("ul1");
                scale();

                starBox.find(".starBottom").find(".change").css("display","block");
            }


        }

        aLis.mouseout(starchange1);//鼠标离开自己动
        starchange1();//页面加载就自己动
        //动画函数2
        function starchange1(){
            var count = starBox.find(".starBottom").find(".change").index();
            timer = setInterval(timeset,5000);
            function timeset(){
                count++;
                starBox.find(".starBottom").find(".starPro").css("display","none");
                aLis.eq(count%6).css("color","#434242");
                aLis.not(aLis.eq(count%6)).css("color","#a4a3a3");
                starBox.find(".starBottom").find(".starPro").eq(count%6).addClass("change");
                starBox.find(".starBottom").find(".starPro").not(starBox.find(".starBottom").find(".starPro").eq(count%6)).removeClass("change");
                //添加图片触摸放大
                starBox.find(".starBottom").find(".change").find(".starProRight").find("ul").addClass("ul1");
                scale();
                starBox.find(".starBottom").find(".change").css("display","block");
                //触摸关闭定时器
                starBox.find(".starBottom").find(".starPro").mouseover(function(){
                    clearInterval(timer);
                })
            }
        }

        //图片动画

        function scale(){
            starBox.find(".starBottom").find(".change").find(".starProRight").find(".ul1").find("li").mouseover(function(){
                    $(this).find("a").stop().animate({
                        "top" : "-5px"
                    },200)
                })
                starBox.find(".starBottom").find(".change").find(".starProRight").find(".ul1").find("li").stop().mouseout(function(){
                    $(this).find("a").stop().animate({
                        "top" : "0px"
                    },200)
                })
        }




    }
    return {
        starpro : starpro
    }
})