define(function(){
    function shopfloor(){
        var oRight = $(".floor").find(".floor_in").find(".floor_1").find(".floor_pic").find(".floor_right");
        $.ajax({
            url:"../data/floor_1.json",
            success:function(data){
                console.log(data);
                for(var i = 0;i <　data.length;i++){
                    $(`<div class="floor_item"><a href="product.html?id=${data[i].id}" class="a_img"><img src="${data[i].img}"></a><a href="" class="a_name">${data[i].pro}</a><a href="#" class="a_detail">${data[i].detail}</a><p class="money"><a href="#" class="a_money">${data[i].money}</a></p></div>`).appendTo(oRight);
                }

                //触摸图片动画
                oRight.find(".floor_item").find(".a_img").find("img").hover(function(){
                    $(this).stop().animate({"left":"10px"},800)
                },function(){
                    $(this).stop().animate({"left":"0px"},800)
                })
            }
        })
    }
    return {
        shopfloor : shopfloor
    }
})