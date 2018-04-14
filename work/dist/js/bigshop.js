define(function(){
    function bigshop(){
        var oS_box=$(".product").find(".detail").find(".left").find("#s_box");
        var oS_position=oS_box.find(".position_box");
        var oS_mark=oS_box.find(".mark_box");
        var oB_box=$(".product").find(".detail").find(".left").find("#b_box");
        var oB_box_all=oB_box.find("#b_box_all")
        oS_mark.mouseover(function(){
            oS_position.css("display","block");
            oB_box.css("display","block");
            // alert(1);

        })
        oS_mark.mouseout(function(){
            oS_position.css("display","none");
            oB_box.css("display","none");
        })

        oS_mark.mousemove(function(event){
            var evt=event||window.event;

            var left=evt.offsetX-oS_position.width()/2;
            //console.log(left)

            if(left<0){
                left=0;
            }else if(left>oS_box.width()-oS_position.width()){
                left=oS_box.width()-oS_position.width();
            }
            //console.log(left)
            oS_position.css("left",left+'px');



            var top=evt.offsetY-oS_position.height()/2;
            if(top<0){
                top=0;
            }else if(top>oS_box.height()-oS_position.height()){
                top=oS_box.height()-oS_position.height();
            }
            //console.log(top)
            oS_position.css("top",top+'px');

            //移动的比例  把X值和Y值换算成比例;

            var proportionX=left/(oS_box.width()-oS_position.width());
            var proportionY=top/(oS_box.height()-oS_position.height());

            console.log(proportionX+':'+proportionY)

            //利用比例去算出大小不同的元素的偏移距离；

            oB_box_all.css("left",-proportionX*(oB_box_all.width()-oB_box.width())+'px');

            oB_box_all.css("top",-proportionY*(oB_box_all.height()-oB_box.height())+'px');

        })
    }
    return {
        bigshop:bigshop
    }
})