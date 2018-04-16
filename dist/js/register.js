console.log("载入成功");

require.config({
    paths:{
        registertop:"registertop"
    }
})
define(function(){
    function register(){
        require(["registertop"],function(registertop){
            registertop.registertop();
        })
        //添加数据库
        var oPerson = $(".register").find(".main").find(".rePerson");
        var oBtn = $(".register").find(".main").find(".reBtn");
        var oCompanyname = $("input[name='oCompanyname']").val();
        var oCompanyemail = $("input[name='oCompanyemail']").val();
        var oCompanynum = $("input[name='oCompanynum']").val();
        oBtn.click(function(){
            $.ajax({
                dataType:"jsonp",
                type:"POST",
                on:true,
                jsonp:"jsonpCallback",
                url:`http://10.30.152.59:8081/lenovo/user?method=register&phonenum=${oPerson.find(".name").find("#phonenum").val()}&password=${oPerson.find(".password").find("#password").val()}&question=123&answer=123456`,
                success:function(data){
                    if(data.result == "success"){
                        alert("注册成功");
                    }

                },
                error:function(){
                    // alert("error");
                }
            })
        })


    }
    return {
        register : register
    }
})