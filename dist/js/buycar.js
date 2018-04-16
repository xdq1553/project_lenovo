define(function(){
    function buycar(){
        var oPro = $("#product").find(".pro");
        $.ajax({
                url: "../data/floor_1.json",
                type: "get",
                success: function(data){
                    var arr = eval($.cookie("products"));

                    var count = 0;
                    for(var i in arr){
                        $(`<table cellspacing="0" align="center" cellpadding="0">
                <tr class="active">
                    <td width="57"><input type="checkbox" checked=""></td>
                    <td width="148"><img src="${data[arr[i].id].img}" alt="" style="width:154px;height:154px;"></td>
                    <td width="257">${data[arr[i].id].pro}</td>
                    <td width="163"></td>
                    <td width="152">${data[arr[i].id].money}</td>
                    <td width="152" id="ar" class="${arr[i].id}">
                        <a class="icon_9 reduce_1"></a>
                        <span class="number">${arr[i].num}</span>
                        <a class="icon_9 add_1"></a></td>
                    <td width="152" id="on">${data[arr[i].id].money}</td>
                    <td width="117"><a href="">删除</a></td>
                </tr>
            </table>`).appendTo(oPro);
                        // alert(typeof parseInt(arr[i].num));
                        // count = i;
                        // money(count);
                        // function money(){
                        //     var str = `${data[arr[count].id].money}`;
                        //     var money = parseInt(str.substring(1))*parseInt(arr[count].num);
                        // }
                        (function(_i){
                            var str = `${data[arr[_i].id].money}`;
                            var money = parseInt(str.substring(1))*parseInt(arr[_i].num);
                            //计算
                            oPro.find("table").find(".active").find("#on").html(money);
                            (function(_money){
                                var allmoney = 0;
                                allmoney += _money;
                                var res =[];
                                res.push(money);
                                // alert(res.length);
                                (function(_allmoney){
                                    var addmoney = 0;
                                    addmoney += _allmoney ;
                                    $("#product").find(".calcute").find(".paymon").find("li").find("#money").html(addmoney);
                                    $("#product").find(".calcute").find(".paymon").find("li").find("#promoney").html(addmoney);
                                })(allmoney);

                            })(money);


                        })(i);
                    }

                    //增加
                    oPro.find("table").find(".active").find("#ar").on("click",".add_1",function(){
                        var arr = eval($.cookie("products"));
                        var oId = $(this).parent().attr("class");
                        for(var i in arr){
                            if(oId == arr[i].id){
                                arr[i].num = arr[i].num + 1;
                                var cookieStr = JSON.stringify(arr);
                                $.cookie("products",cookieStr,{expires : 7});
                            }
                        }
                        window.location.reload();
                    });

                    // 减少
                    oPro.find("table").find(".active").find("#ar").on("click",".reduce_1",function(){

                        var oId = $(this).parent().attr("class");
                        var arr = eval($.cookie("products"));
                        for(var i in arr){
                            if(oId == arr[i].id){
                                arr[i].num = arr[i].num - 1;
                                var cookieStr = JSON.stringify(arr);
                                $.cookie("products",cookieStr,{expires : 7});
                            }

                        }
                        window.location.reload();
                    });
                    //计算




                }
            })
    }
    return {
        buycar:buycar
    }
})