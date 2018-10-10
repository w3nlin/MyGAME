/**
 * Created by ASUS on 2018/10/10.
 */
function horizontal(documentWidth,documentHeight){ //横屏下的样式
    /*var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;*/
    $("#main").css({
        width:documentWidth+"px",
        height:documentHeight+"px",
        border:"1px solid blue"
    });
    $("#main div").eq(0).css({
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"grey",
        lineHeight:documentHeight*0.12+"px",
        width:documentWidth+"px",
        height:documentHeight*0.12+"px",
        border:"1px solid blue"
    });
    $("#main div").eq(1).css({
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"gray",
        lineHeight:documentHeight*0.12+"px",
        width:documentWidth+"px",
        height:documentHeight*0.12+"px",
        border:"1px solid blue"
    });
    $("#box").css({
        border:"1px solid red",
        width:documentWidth+"px",
        height:documentHeight*0.76+"px",
    });
    $("#selectFist").css({
        float:"left",
        marginLeft:documentWidth*0.015+"px",
        marginRight:documentWidth*0.015+"px",
    });
    $("#selectFist div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"cyan",
        height:documentHeight*0.76*0.1+"px",
        width:"100%",
        border:"1px solid yellow",
    });
    $("#selectFist div").eq(1).css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
        border:"1px solid yellow",
    });
    $("#selectFist div").eq(2).css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
        border:"1px solid yellow",
    });
    $("#selectFist div").eq(3).css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
        border:"1px solid yellow",
    });
    $("#selectFist div").eq(1).children("img").css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
    });
    $("#selectFist div").eq(2).children("img").css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
    });
    $("#selectFist div").eq(3).children("img").css({
        height:documentHeight*0.76*0.25+"px",
        width:documentHeight*0.76*0.25+"px",
    });
    $("#myView").css({
        float:"left",
        width:documentWidth/4+"px",
        border:"1px solid purple",
    });

    $("#vs").css({
        float:"left",
        marginLeft:documentWidth*0.015+"px",
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });
    $("#vs img").css({
        height:"100%",
        width:"100%",
    });
    $("#computerView").css({
        float:"left",
        marginLeft:documentWidth*0.015+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });
    $("#myView div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"cyan",
        lineHeight:documentHeight/0.76*0.05+"px",
        height:documentHeight/0.76*0.05+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });
    $("#myView div").eq(1).css({
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });

    $("#myView div").eq(1).children("img").css({
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",
        marginTop:documentHeight/0.76*0.01+"px"
    });
    $("#computerView div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"red",
        height:documentHeight/0.76*0.05+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });
    $("#computerView div").eq(1).css({
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",
        border:"1px solid blue",
    });
    $("#computerView div").eq(0).children("img").css({
        height:documentHeight/0.76*0.05+"px",
        width:documentWidth/4+"px",
        border:"1px solid pink",
    });
    $("#computerView div").eq(1).children("img").css({
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",
        marginTop:documentHeight/0.76*0.01+"px"
    });

}

function vertical(documentWidth,documentHeight){  //竖屏下的样式
    /*var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;*/
    $("#main").css({
        width:documentWidth+"px",
        height:documentHeight+"px",
        border:"1px solid blue"
    });
    $("#box").css({
        width:documentWidth*0.99+"px",
        height:1+"px",
        margin:"auto",

    });
    $("#main div").eq(0).css({
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"grey",
        opacity:0.2,
        lineHeight:documentHeight*0.05+"px",
        width:documentWidth+"px",
        height:documentHeight*0.05+"px",
        border:"1px solid blue"
    });
    $("#main div").eq(1).css({
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"gray",
        lineHeight:documentHeight*0.05+"px",
        width:documentWidth+"px",
        height:documentHeight*0.05+"px",
        border:"1px solid blue"
    });
    $("#myView").css({
        float:"left",
        height:documentWidth*0.5+"px",
        width:documentWidth*0.4+"px",
        border:"1px solid pink",
    });
    $("#myView div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"cyan",
        lineHeight:documentWidth*0.1+"px",
        height:documentWidth*0.1+"px",
        width:"100%",
        border:"1px solid pink",
    });
    $("#myView div").eq(1).css({
        height:documentWidth*0.4+"px",
        width:"100%",
        border:"1px solid pink",
    });
    $("#myView div").eq(1).children("img").css({
        height:"100%",
        width:"100%",
        border:"1px solid pink",
    });
    $("#vs").css({
        float:"left",
        height:documentWidth*0.19+"px",
        width:documentWidth*0.19+"px",
        border:"1px solid pink",
    });
    $("#vs img").css({
        height:"100%",
        width:"100%",
    });
    $("#computerView").css({
        float:"left",
        height:documentWidth*0.5+"px",
        width:documentWidth*0.4+"px",
        border:"1px solid pink",
    });
    $("#computerView div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"red",
        lineHeight:documentWidth*0.1+"px",
        height:documentWidth*0.1+"px",
        width:"100%",
        border:"1px solid pink",
    });
    $("#computerView div").eq(1).css({
        height:documentWidth*0.4+"px",
        width:"100%",
        border:"1px solid pink",
    });
    $("#computerView div").eq(1).children("img").css({
        height:"100%",
        width:"100%",
        border:"1px solid pink",
    });
    $("#selectFist").css({
        position:"fixed",
        bottom:"0px",
    });
    $("#selectFist div").eq(0).css({
        textAlign:"center",
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        background:"blue",
        lineHeight:documentWidth*0.1+"px",
        height:documentWidth*0.1+"px",
        width:documentWidth+"px",
        border:"1px solid yellow",
    });
    $("#selectFist div").eq(0).nextAll("div").css({float:"left",border:"1px solid yellow",height:documentWidth*0.33+"px",
        width:documentWidth*0.33+"px",});

    $("#selectFist div").eq(1).children("img").css({
        height:"100%",
        width:"100%",
    });
    $("#selectFist div").eq(2).children("img").css({
        height:"100%",
        width:"100%",
    });
    $("#selectFist div").eq(3).children("img").css({
        height:"100%",
        width:"100%",
    });
}