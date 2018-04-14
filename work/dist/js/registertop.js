define(function(){
    function registertop(){
        var oP = $(".register").find(".twoTitle");
        $(document).scroll(function(){
            if($(document).scrollTop() == 0){
                $(".logo").find("img").css("display","block");
            }else if($(document).scrollTop() > 0 && $(document).scrollTop() < 165){
                      $(".logo").find("img").css("display","block");
            }else  if($(document).scrollTop() > 165){
                     $(".logo").find("img").css("display","none");
            }
        })

        //点击换
        oP.find(".person").click(function(){
            $(this).css("color","#e43e38");
            oP.find(".company").css("color","#424242");
            $(".register").find(".main").find(".rePerson").css("display","block");
            $(".register").find(".main").find(".reCompany").css("display","none");
        })
        oP.find(".company").click(function(){
            $(this).css("color","#e43e38");
            oP.find(".person").css("color","#424242");
            $(".register").find(".main").find(".rePerson").css("display","none");
            $(".register").find(".main").find(".reCompany").css("display","block");
        })


        //拖动滑块
        var oBlock = $(".register").find(".main").find(".rePerson").find(".move").find(".slider");
        var node = oBlock.find(".block");
        var oBlock_1 = $(".register").find(".main").find(".reCompany").find(".move").find(".slider");
        var node2 = oBlock_1.find(".block");
        drag(node,oBlock);
        drag(node2,oBlock_1);
        //封装函数
        function drag(node,node1){
            var offsetX = 0;
            node.mousedown(function(ev){
                offsetX = ev.pageX - $(this).position().left;
                $(document).mousemove(function(ev){
                    var X = ev.pageX - offsetX;
                    if(X < 0){
                        X = 0;
                    }else if(X > 308){
                        X = 308;
                    }
                    node.css({
                        left: X +"px",
                    })
                    node1.find(".bottom").css("width",X+"px");
                    if(X > 220 && X < 250){
                        node1.find(".wrap").css({
                            "background":"none",
                            "color":"#fff"
                        });
                        node1.find(".wrap").html("验证成功")

                        node.css({
                            left: 308,
                        })
                        node1.find(".bottom").css("width","308px");
                        node1.find(".block").css("background",`"#fff url("../images/pic/block_2.png") center center no-repeat"`);
                        $(document).off();
                    }
                })
                $(document).mouseup(function(){
                    $(document).off();
                })
            })
        }
        //滑块的动画

    }
    return {
        registertop: registertop
    }
})