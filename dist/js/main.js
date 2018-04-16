console.log("加载成功");
/*
    配置路径
*/
require.config({
    paths: {
        top :"top",
        banner:"banner",
        changebox:"changebox",
        starpro: "starpro",
        bgchange:"bgchange",
        firstbottom : "firstbottom",
        downmenu : "downmenu",
        login:"login"

    }
})
define(function(){
    function main(){
            require(["top"],function(top){
                top.top();
            });
            require(["banner"],function(banner){
                banner.banner();
            });
            require(["changebox"],function(changebox){
                changebox.changebox();
            });
            require(["starpro"],function(starpro){
                starpro.starpro();
            })
            require(["bgchange"],function(bgchange){
                bgchange.bgchange();
            })
            require(["firstbottom"],function(firstbottom){
                firstbottom.firstbottom();
            })
            require(["downmenu"],function(downmenu){
                downmenu.downmenu();
            })
            require(["login"],function(login){
                login.login();
            })
    }

    return {
        main : main
    }
})
