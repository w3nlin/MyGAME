/**
 * Created by ASUS on 2018/10/10.
 */
function horizontal(documentWidth,documentHeight){ //横屏下的样式
    /*var documentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    var documentHeight=document.documentElement.clientHeight||document.body.clientHeight;*/
    /*$("#selectFist div").eq(0).children("span").css({
        zIndex:5,
        width:"50px",
        position:"absolute",
        top:0,
        left:0,
        transition:"1s",
        display: "block",
        height:documentHeight*0.76*0.1+"px",
        background:"linear-gradient(90deg,rgba(255,255,255,0) 100px,rgba(255,255,255,1) 140px,rgba(255,255,255,1) 180px,rgba(255,255,255,0) 220px) 100px 0",
    }),*/
    $("p").css({
        border:"2px solid red",
            height:documentHeight/12+"px",
        margin:0,
        pading:0,
        fontSize:documentHeight/20+"px",

    })
    $("p").children().css({
        border:"2px solid red",
        height:documentHeight/12+"px",
        margin:0,
        pading:0,
        fontSize:documentHeight/20+"px",
        textAlign:"center",
        borderRadius:"50px",
    });

    $("#timesText").css({
        width:documentWidth/12+"px",
        height:documentHeight/13+"px",
        marginLeft:"10px",
        marginRight:"10px",
        borderRadius:"50px",
    }),
    $("#timesButton").css({borderRadius:"20px",cursor:"pointer",background:"yellow",border:"5px dashed grey",animation: "animals 0.2s infinite",})
    $("#timesButton").on("mouseover",function(){
        $(this).css({border:"5px solid blue",background:"cyan",cursor:"pointer"})
    });
    $("#timesButton").on("click",function(){
        $(this).html("X");
        $(this).css({background:"grey",color:"white",border:"red",animation:""})

    });
    $("#closeModel").css({
        width:documentWidth+"px",
        height:documentHeight+"px",
        background:"grey",
        opacity:0.3,
        position:"absolute",
        top:0,
        left:0
    });
    $("#closeBox").css({
        display:"none"
    })
    $("#closeBox span").css({
        border:"1px solid black",
        fontSize:documentWidth/15+"px",
        fontWeight:"bold",
        textAlign:"center",
        borderRadius:"50px",
        cursor:"pointer",
        opacity:"0.8",
        height:documentHeight/5+"px",
        lineHeight:documentHeight/5+"px",
        position:"absolute",
    })
    $(".result").css({
        fontSize:documentWidth/15*2+"px",
        lineHeight:documentHeight/3+"px",
        width:documentWidth*0.95+"px",
        height:documentHeight/3+"px",
        background:"black",
        color:"white",
        top:(documentHeight/20)+"px",
        left:documentWidth*0.025+"px",
    });
    $(".reStart").css({
        width:documentWidth/5*2+"px",
        background:"blue",
        top:documentHeight/2-(documentHeight/5/2)+"px",
        left:documentWidth/2-(documentWidth/5)+"px",
        cursor:"pointer",
    });
    $(".closeWindow").css({
        width:documentWidth/5+"px",
        background:"red",
        top:documentHeight-(documentHeight/3)+"px",
        left:documentWidth/2-(documentWidth/5/2)+"px",
        cursor:"pointer",
    });
    $("#main").css({
        width:documentWidth+"px",
        height:documentHeight+"px",

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
        background:"blue",
        height:documentHeight/0.76*0.05+"px",
        width:documentWidth/4+"px",

    });
    $("#myView div").eq(1).css({
        height:documentWidth/4+"px",
        width:documentWidth/4+"px",

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
    $("p").css({
        border:"2px solid red",
        height:documentHeight/12+"px",
        margin:0,
        pading:0,
        fontSize:documentHeight/20+"px",

    })
    $("p").children().css({
        border:"2px solid red",
        height:documentHeight/12+"px",
        margin:0,
        pading:0,
        fontSize:documentHeight/20+"px",
        textAlign:"center",

    });
    $("#timesText").css({
        width:documentWidth/5+"px",
        height:documentHeight/13+"px",
        marginLeft:"10px",
        marginRight:"10px",
        borderRadius:"50px",
    }),
        $("#timesButton").css({borderRadius:"20px",cursor:"pointer",background:"yellow",border:"5px dashed grey",animation: "animals 0.2s infinite",})
    $("#timesButton").on("mouseover",function(){
        $(this).css({border:"5px solid blue",background:"cyan",cursor:"pointer"})
    });
    $("#timesButton").on("click",function(){
        $(this).html("X");
        $(this).css({background:"grey",color:"white",border:"red",animation:""})

    });
    $("#closeModel").css({
        width:documentWidth+"px",
        height:documentHeight+"px",
        background:"grey",
        opacity:0.3,
        position:"absolute",
        top:0,
        left:0
    });
    $("#closeBox").css({
        display:"none"
    })
    $("#closeBox span").css({
        border:"1px solid black",
        fontSize:"200px",
        fontWeight:"bold",
        textAlign:"center",
        borderRadius:"50px",
        opacity:"0.8",
        height:documentHeight/5+"px",
        lineHeight:documentHeight/5+"px",
        position:"absolute",
    });
    $(".result").css({
        fontSize:documentWidth/15*2+"px",
        lineHeight:documentHeight/3+"px",
        width:documentWidth*0.95+"px",
        height:documentHeight/3+"px",
        background:"black",
        color:"white",
        top:(documentHeight/20)+"px",
        left:documentWidth*0.025+"px",
    });
    $(".reStart").css({
        cursor:"pointer",
        width:documentWidth*0.95+"px",
        background:"blue",
        top:documentHeight/2-(documentHeight/5/2)+"px",
        left:documentWidth*0.025+"px",
    });
    $(".closeWindow").css({
        cursor:"pointer",
        width:documentWidth*0.6+"px",
        background:"red",
        top:documentHeight-(documentHeight/3)+"px",
        left:documentWidth*0.2+"px",

    });
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
        /*background:"grey",*/
        lineHeight:documentHeight*0.05+"px",
        width:documentWidth+"px",
        height:documentHeight*0.05+"px",
        /*border:"1px solid blue"*/
    });
    $("#main div").eq(1).css({
        fontWeight:"bold",
        fontSize:documentWidth/50+"px",
        /*background:"gray",*/
        lineHeight:documentHeight*0.05+"px",
        width:documentWidth+"px",
        height:documentHeight*0.05+"px",
        /*border:"1px solid blue"*/
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
        fontSize:documentWidth/25+"px",
        background:"blue",
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
        fontSize:documentWidth/25+"px",
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
        fontSize:documentWidth/25+"px",
        background:"cyan",
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