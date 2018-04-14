define(function(){
    function downmenu(){
        var aLis = $("#downMenu").find(".menuTop").find("li");

        aLis.eq(0).find("ol").css("display","block");
        for(var i = 0;i < aLis.length;i++){
            aLis.eq(i).hover(function(){
                $(this).find("a").find("img").eq(0).css("display","none");
                $(this).find("a").find("img").eq(1).css("display","inline");
                $(this).find("ol").css("display","block");
            },function(){
                $(this).find("a").find("img").eq(1).css("display","none");
                $(this).find("a").find("img").eq(0).css("display","inline");
                $(this).find("ol").css("display","none");
            })
            aLis.find("ol").mouseover(function(){
                $(this).css("display","block");
            })


        }

        $.ajax({
            url : "../data/down.json",
            success: function(data){
                console.log(data);
                var html = "";
                for(var i = 0;i < data.length;i++){
                    for(var j = 0;j < data[i].content.length;j++){
                        $(`<li><p><a href="">${data[i].content[j].name}</a></p><dl></dl></li>`).appendTo(aLis.eq(i).find("ol"));
                        for(var l = 0;l < data[i].content[j].text.length;l++){
                            $(`<dd><span></span><a href="">${data[i].content[j].text[l]}</a></dd>`).appendTo(aLis.eq(i).find("ol").find("li").eq(j).find("dl"));
                        }
                    }
                }

            },
            error: function(data){
                alert("error");
            }
        })

        //触摸的时候变化
        $("#person").find(".a_1").hover(function(){
            $("#downMenu").stop().animate({"height":"452px"},1000).css("display","block");
        })
        $("#downMenu").hover(function(){
        },function(){
            $("#downMenu").stop().animate({"height":"0px"},1000)
        })

    }
    return {
        downmenu : downmenu
    }
})