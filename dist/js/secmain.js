console.log("载入成功");

require.config({
    paths:{
        shoppingtop : "shoppingtop",
        shoppingbanner: "shoppingbanner",
        shoppingmenu : "shoppingmenu",
        minstar : "minstar",
        starone:"starone",
        shopfloor:"shopfloor",
        firstbottom:"firstbottom",
        login:"login"
    }
})
define(function(){
        function secmain(){
            require(["shoppingtop"],function(shoppingtop){
                shoppingtop.shoppingtop();
            })
            require(["shoppingbanner"],function(shoppingbanner){
                shoppingbanner.shoppingbanner();
            })
            require(["shoppingmenu"],function(shoppingmenu){
                shoppingmenu.shoppingmenu();
            })
            require(["minstar"],function(minstar){
                minstar.minstar();
            })
            require(["starone"],function(starone){
                starone.starone();
            })
            require(["shopfloor"],function(shopfloor){
                shopfloor.shopfloor();
            })
            require(["firstbottom"],function(firstbottom){
                firstbottom.firstbottom();
            })
            require(["login"],function(login){
                login.login();
            })
        }
        return {
            secmain : secmain
        }
    })