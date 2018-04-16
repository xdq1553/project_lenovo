define(function(){
    function shoppingmenu(){
        var oUl = $("#box").find(".shopMenu").find(".posShop").find("ul");
        var aLis = oUl.find("li");
        $.ajax({
            url:"../data/shoppingmenu.json",
            success: function(data){
                console.log(data);
                //添加一级菜单
                for(var i = 0;i < data.length;i++){
                    $(`<li><div class="navmenu"><a href="#" class="atop">${data[i].id}<span class="icon_6 icon6_6"></span></a><div class="list"><ol class="list_1"></ol></div></div></li>`).appendTo(oUl);
                }
                    //添加二级菜单
                    for(var i = 0;i < data.length;i++){
                        for(var j = 0;j < data[i].content.length;j++){
                        $(`<li class="list_2"><p><a href="#">${data[i].content[j].name}</a></p><dl class="threelist"></dl></li>`).appendTo(oUl.find("li").eq(i).find(".navmenu").find(".list").find("ol"));
                        //添加三级菜单
                        for(var l = 0; l < data[i].content[j].text.length;l++){
                            $(`<dd><a href="#">${data[i].content[j].text[l]}</a></dd>`).appendTo(oUl.find("li").eq(i).find(".navmenu").find(".list").find("ol").find("li").eq(j).find("dl"));
                        }
                    }

                    }


                //设置样式
                for(var i = 0 ;i < oUl.find("li").length;i++){
                    oUl.find("li").eq(i).find(".navmenu").find(".atop").hover(function(){
                        $(this).css({
                            "color":"#e2231a",
                            "backgroundColor":"#f7f7f7",
                            "borderRight" : "none"

                        });
                        $(this).find(".icon6_6").css("backgroundPositionX","-74px");
                        $(this).next().find("ol").css("display","block");
                    },function(){
                        $(this).css({
                            "color":"#000",
                            "backgroundColor":"#fff",
                            "borderRight" : "1px solid #e6e6e6"
                        });
                        $(this).find(".icon6_6").css("backgroundPositionX","-85px");
                        $(this).next().find("ol").css("display","none");
                    })
                 }
                 oUl.find("li").eq(i).find(".navmenu").find(".list").mouseover(function(){
                    $(this).find("ol").css("display","block");
                 })
            },
            error: function(){
                console.log("error");
            }
        })

        //触摸变换

}

    return {
        shoppingmenu : shoppingmenu
    }
})