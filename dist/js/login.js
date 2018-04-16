define(function(){
    function login(){
        var oLogin = $(".lrpage");
        var oLr = $("#header_1").find("#right").find(".login");
        console.log(oLr);
        oLr.click(function(){
            $(".bgpage").css("display","block");
           $(".lrpage").css("display","block");
        })
        oLogin.find(".close").click(function(){
            $(".bgpage").css("display","none");
            oLogin.css("display","none");
        })

        $(".lrpage").find(".login").find(".loginBox").find("#submit").click(function(){
                    $.ajax({
                        dataType:"jsonp",
                        type:"POST",
                        on:true,
                        jsonp:"jsonpCallback",
                        url:`http://10.30.152.59:8081/lenovo/user?method=login&phonenum=${$("#phonenum").val()}&password=${$("#password").val()}`,
                        success:function(data){
                            if(data.result == "success"){
                                alert("登录成功");
                                $(".bgpage").css("display","none");
                                oLogin.css("display","none");


                            }

                        },
                        error:function(){
                            alert("error");
                        }
                    })

            })


    }
    return {
        login:login
    }
})