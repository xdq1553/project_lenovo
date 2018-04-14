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
    }
    return {
        login:login
    }
})