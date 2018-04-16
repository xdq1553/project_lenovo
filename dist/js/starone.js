define(function(){
    function starone(){
        var oUl = $(".starpro").find(".starpro_1").find(".starpic").find("ul");
        $.ajax({
            url:"../data/starone.json",
            success:function(data){
                console.log(data);
                for(var i = 0;i < data.length;i++){
                    $(`<li><a href="#"><img src="${data[i].img}"></a><p class="star_name"><a href="#">${data[i].pro}</a></p><p class="star_detail"><a href="#">${data[i].detail}</a></p><p class="star_mon"><a href="#">${data[i].money}</a></p></li>`).appendTo(oUl);
                }
                //点击滚动
                $(".starpro").find(".starpro_1").find(".btn_1").click(function(){
                    oUl.stop().animate({
                         left : "-198px"
                    },1000,function(){
                        oUl.find("li").eq(0).appendTo(oUl);
                        oUl.css("left","0");
                     })
                })
                $(".starpro").find(".starpro_1").find(".btn_2").click(function(){
                    oUl.stop().animate({
                         left : "0px"
                    },1000,function(){
                        oUl.find("li").eq(20).prependTo(oUl);
                        oUl.css("left","-198px");
                     })
                })
                //触摸顶部边框变红
                oUl.find("li").hover(function(){
                    $(this).css("borderTop","1px solid red");
                },function(){
                    $(this).css("borderTop","1px solid #e6e6e6")
                })
            },
            error:function(data){
                alert("error");
            }
        })
    }
    return {
        starone :starone
    }
})