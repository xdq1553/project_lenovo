define(["bigshop"],function(bigshop){
    function product_1(){

        var oId = window.location.search.split("id=")[1];
        var oLeft = $(".product").find(".detail").find(".left").find(".fourpic").find(".scrollpic");
        var oList = $(".product").find(".detail").find(".right").find(".list").find(".msg");
        $.ajax({
            url:"../data/floor_1.json",
            data:{id:oId},
            success:function(data){
                console.log(data);
                for(var i = 0;i < data.length;i++){
                    for(var j = 0;j < data[i].pic.length;j++){
                        if(data[i].id == oId){
                            //传图片
                            $(`<li><img src="${data[i].pic[j]}"></li>`).appendTo(oLeft.find("ul"));

                        }

                    }
                    for(var l = 0;l<data[i].color.length;l++){
                        // 传数据
                        if(data[i].id == oId){
                            $(`<span>${data[i].color[l]}</span>`).appendTo(oList.find("#color"));
                        }

                    }
                    for(var k = 0;k<data[i].stystem.length;k++){
                        // 传
                        if(data[i].id == oId){
                            $(`<span>${data[i].stystem[k]}</span>`).appendTo(oList.find("#stystem"));
                        }
                    }
                    for(var m = 0;m<data[i].gtx.length;m++){
                        // 传数据
                        if(data[i].id == oId){
                            $(`<span>${data[i].gtx[m]}</span>`).appendTo(oList.find("#gtx"));
                        }

                    }
                    if(data[i].id == oId){
                        $(".product").find(".detail").find(".left").find("#s_box").find("#pic").attr("src",`${data[i].pic[0]}`);
                        $(".product").find(".detail").find(".left").find("#b_box").find("#b_box_all").find("#pic_1").attr("src",`${data[i].pic[0]}`);

                        $(".product").find(".detail").find(".right").find("#name_1").html(`<div id="name">${data[i].title}</div>`);
                        $(".product").find(".nav").find(".nav_text").html(`<a href="shopping.html">首页</a>
            > 商品详情 >${data[i].pro}`);

                    }
                    //加载购物价格
                if(data[i].id == oId){
                    $(".buy").find(".buy_1").find(".money").find(".pay").html(`${data[i].money}`);
                    $(".buy").find(".buy_1").find(".right").find("#number").val(`${data[i].number}`);
                }
                }

                //设置点击样式
                    oLeft.find("ul").find(".active").css("border","1px solid red");

                var count = 0;
                $("#btn1").click(function(){
                    count--;
                    addclick(count);
                })
                $("#btn2").click(function(){
                    count++;
                    addclick(count);

                })
                function addclick(count){
                        var count = Math.abs(count);
                        oLeft.find("ul").find("li").attr("class","");
                        oLeft.find("ul").find("li").css("border","1px solid #f7f7f7");
                        oLeft.find("ul").find("li").eq(count%4).addClass("active");
                        oLeft.find("ul").find(".active").css("border","1px solid red");
                        $(".product").find(".detail").find(".left").find("#s_box").find("#pic").attr("src",oLeft.find("ul").find("li").eq(count%4).find("img").attr("src"));
                        $(".product").find(".detail").find(".left").find("#b_box").find("#b_box_all").find("#pic_1").attr("src",oLeft.find("ul").find("li").eq(count%4).find("img").attr("src"))

                }
                //设置点击详情的样式
                oList.find("#color").find("span").click(function(){
                    oList.find("#color").find("span").css("border","1px solid #c9c9c9")
                    $(this).css("border","1px solid red");
                })
                oList.find("#stystem").find("span").click(function(){
                    oList.find("#stystem").find("span").css("border","1px solid #c9c9c9")
                    $(this).css("border","1px solid red");
                })
                oList.find("#gtx").find("span").click(function(){
                    oList.find("#gtx").find("span").css("border","1px solid #c9c9c9")
                    $(this).css("border","1px solid red");
                })
                //放大镜
                require(["bigshop"],function(bigshop){
                    bigshop.bigshop();
                })

            },
            error:function(){
                console.log("error");
            }
        })

        //添加购物车
        sc_car();
        $(".buy").find(".buy_1").find(".button_1").on("click","#buy_1",function(){
            // alert(1);
            //判断是否第一次添加
                var id = oId;
                var first = $.cookie("products") == null ? true : false;
                //如果是第一次添加，则添加一次num，id
                if(first){
                    $.cookie("products",'[{id:' + id + ',num:1}]',{expires:7});
                }else{
                //如果不是第一次添加，就num++
                    var str = $.cookie("products");
                    var arr = eval(str);
                    var Same =  false;

                    //遍历所有对象，是否有相同ID，有就num++
                    for(var i in arr){
                        if(arr[i].id == id){
                            arr[i].num = arr[i].num + 1;
                            var cookieStr = JSON.stringify(arr);
                            $.cookie("products",cookieStr,{expires : 7});
                        Same = true;
                        break;
                        }

                    }

                    //如果没有相同商品，就让他们直接加入缓存
                    if(!Same){
                        var obj = {id: id, num: 1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("products",cookieStr,{expires : 7});


                    }


                }
                        sc_car();
                        return false;

        })
        //购物车数字
        function sc_car(){
            var sc_str = $.cookie("products");
            if(sc_str){ //判断字符串是否存在
                var sc_arr = eval(sc_str);
                var sc_num = 0;
                for(var i in sc_arr){
                    sc_num = Number(sc_arr[i].num) + sc_num;
                }
                $("#header_1").find("#right").find(".shopping").find(".icon_1").html(sc_num);
            }
        }



    }
    return {
        product_1:product_1
    }
})