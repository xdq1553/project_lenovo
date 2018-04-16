console.log("载入成功");

require.config({
    paths:{
        producttop : "producttop",
        firstbottom:"firstbottom",
        product_1:"product_1",
        bigshop:"bigshop"
    }
})
define(function(){
    function product(){
        require(["producttop"],function(producttop){
            producttop.producttop();
        })
        require(["firstbottom"],function(firstbottom){
            firstbottom.firstbottom();
        })
        require(["product_1"],function(product_1){
            product_1.product_1();
        })
    }
    return {
        product : product
    }
})