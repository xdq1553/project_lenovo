define(function(){
    function changebox(){
        var aLis = $(".floor_1").find(".changeBox").find(".boxBody").find("li");

        //加载数据
        $.ajax({
            url:"data/fourpic.json",
            success:function(data){
                for(var i = 0;i < data.length;i++){
                    aLis.eq(i).html(`<div class="textPic"><a href="#"><img src="` + data[i].textPic_1 +`" alt=""><img src="` + data[i].textPic_2 + `" alt=""></a></div><div class="criclePic"><img src="` + data[i].criclePic + `" alt=""></div><div class="bgPic"><img src="` + data[i].bgPic + `" alt=""></div>`);
                }
                //处理数据
                //处理数据并且实现效果
                setbox();
            }
        })
        for(var i = 0;i < aLis.length;i++){
                    aLis.eq(i).mouseover(change);
                    aLis.eq(i).mouseout(setbox);
                }
        //变换效果
        function setbox(){
                    for(var i = 0;i < aLis.length;i++){
                    //文字图片处理
                    aLis.eq(i).find(".textPic").css({
                        "position" : "absolute",
                        "zIndex" : 10,
                    })
                    aLis.eq(i).find(".textPic").find("img").eq(0).css({
                        "display" : "block",
                        "position" : "absolute",
                        "zIndex" : 20,
                    })
                    aLis.eq(i).find(".textPic").find("img").eq(1).css({
                        "display" : "block",
                        "position" : "absolute",
                        "zIndex" : 10,
                    })

                    //圆图和背景处理
                    aLis.eq(i).find(".criclePic").css({
                        "position" : "absolute",
                        "zIndex" : 100,
                        "top" : "54px",
                        "left" : "50%",
                        "width": "108px",
                        "height" : "108px",
                        "margin-left" : "-54px",
                    })
                    aLis.eq(i).find(".bgPic").css({
                        "position" : "absolute",
                        "zIndex" : 1,
                        "opacity" : 0
                    })

                     aLis.eq(i).find(".criclePic").find("img").css({
                        "display" : "block",
                        "width": "108px",
                        "height" : "108px",
                        "borderRadius" : "50%"
                     })


                }
                $(this).css("border","10px solid #fff")
            }
        function change(){
                    //文字图片处理
                    $(this).find(".textPic").css({
                        "zIndex" : 50,
                    })
                    $(this).find(".textPic").find("img").eq(0).css({
                        "zIndex" : 1,
                    })
                    $(this).find(".textPic").find("img").eq(1).css({
                        "zIndex" : 51,
                    })

                    //圆图和背景处理
                    $(this).find(".criclePic").css({
                        "zIndex" : 1,
                    })
                    $(this).find(".bgPic").css({
                        "zIndex" : 40,
                        "opacity" : 1
                    })
                    //li边框变色
                    $(this).css("border","10px solid #ebebeb")
        }


    }
    return {
        changebox : changebox
    }
})



