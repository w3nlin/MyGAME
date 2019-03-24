/**
 * Created by ASUS on 2018/8/16.
 */
$(function(){
    var timer1=null;
    var timer2=null;
    var timer3=null;

    //function
    //定义一个专门处理灰太懒动画的方法
    function wolfAnimation(){
        var oImg1Arr=["images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png",
            "images/a6.png","images/a7.png","images/a8.png",];
        var oImg2Arr=["images/b1.png","images/b2.png","images/b3.png","images/b4.png","images/b5.png",
            "images/b6.png","images/b7.png","images/b8.png",];
        var positionJson=[{top:"140px",left:"20px"},{top:"150px",left:"120px"},{top:"130px",left:"230px"},{top:"250px",left:"20px"},
            {top:"250px",left:"120px"},{top:"240px",left:"230px"},{top:"370px",left:"20px"},{top:"350px",left:"120px"},{top:"370px",left:"230px"},]

           var pIndex=Math.round(Math.random()*8); //随机生成位置
           var oImgType=Math.round(Math.random())==0?oImg1Arr:oImg2Arr; //随机生成图片类型
           var oImg=$("<img class='oImgCla' src=''>"); //创建图片
           oImg.css({position:"absolute",top:positionJson[pIndex].top,left:positionJson[pIndex].left}); //确定图片位置
           window.n=-1;
            window.n2=4;
           timer2=setInterval(function(){ //让图片动态生成
               n++;
               oImg.attr("src",oImgType[n]);

               if(n>n2){
                   oImg.remove();
                   clearInterval(timer2);
                   wolfAnimation();

               }
           },250)
        $(".container").append(oImg); //让图片展示到页面
        fn(oImg);


    }
function fn(oImg){
    var n1=5;
    oImg.one("click",function(){
        window.n=4;
        window.n2=7;
        console.log(oImg.attr("src"));
        var ind=oImg.attr("src");

        var flag=ind.indexOf("a",3)>=4;
        if(flag){
            $(".container>h1").text(parseInt($(".container>h1").text())+10);
        }else{
            $(".container>h1").text(parseInt($(".container>h1").text())-10);
        }
    })
}
    //function
    //定义一个专门处理进度条的方法
    function progressHanderler(){
        $(".progress").width(180);
        var timer=setInterval(function(){
            var progressWidth=$(".progress").width();
            //减少当前的宽度
            progressWidth-=1;
            //重新给进度条赋值宽度
            $(".progress").css({width:progressWidth});
            //监听进度条是否走完
            if(progressWidth<=0){
                //关闭定时器
                clearInterval(timer);
                $(".oImgCla").remove();
                clearInterval(timer2);
                //显示重新开始界面
                $(".mask").stop().fadeIn(100);
            }
        },300);
    }

    //3.监听开始游戏按钮的点击
    $(".start").click(function(){
        $(this).stop().fadeOut();
        //调用进度条的方法
        progressHanderler();
        //调用处理灰太狼动画的方法
        wolfAnimation();
    });
    //4.监听重新开始按钮
    $(".reStart").on("click",function(){
        $(".mask").stop().fadeOut("100");
        progressHanderler();
        wolfAnimation();
        $(".container>h1").text(0);
    })



})
