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
        var oInput = oPerson.find(".name").find("#phonenum").val();
        var oPassword = $("#password").val();
        var oCompanyname = $("input[name='oCompanyname']").val();
        var oCompanyemail = $("input[name='oCompanyemail']").val();
        var oCompanynum = $("input[name='oCompanynum']").val();
         alert(oInput);
        oBtn.click(function(){
            // alert(oInput);
            $.ajax({
                dataType:"jsonp",
                type:"POST",
                url:`http://10.30.152.59:8081/lenovo/user`,
                // data:JSON.stringify({
                //     method:register,
                //     phonenum:oInput,
                //     password:oPassword,
                //     companyname:oCompanyname,
                //     companyemail:oCompanyemail,
                //     companynum:oCompanynum,
                //     question : 123,
                //     answer: 123456,
                // }),
                data:`method=register&phonenum=${oInput}&password=${oPassword}&question=123&answer=123456`,
                success:function(data){
                    alert(data.result);

                },
                error:function(){
                    alert("error");
                }
            })
        })


    }
    return {
        register : register
    }
})