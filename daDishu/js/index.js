
*{margin:0;
    padding:0;
}
.container{
    width: 320px;
    height:480px;
    background: url("../images/game_bg.jpg")no-repeat 0 0;
    margin: 50px auto;
    position: relative;
    padding-top:5px;

}
.container>h1{
    color:white;

    margin-left:68px;
}
.container>.progress{
    width:180px;
    height:16px;
    background: url("../images/progress.png") no-repeat 0 0;
    position: absolute;
    top:64px;
    left:51px;
}
.container>.start{width:150px;line-height: 35px;text-align:center;color:black;border-radius:20px;border:none;font-size: 20px;top:320px;left:50%;margin-left:-75px;position: absolute; }
.container>.mask{display: none;width: 100%;height:100%;background: rgba(0,0,0,0.5);position:absolute;left:0;top:0;padding-top:200px;box-sizing: border-box;text-align: center;}
.mask>h1{color:#ff4500;text-shadow: 3px 3px 0 #fff;font-size: 40px;}
.mask>button{
    width:150px;line-height: 35px;text-align:center;color:black;border-radius:20px;border:none;font-size: 20px;top:320px;left:50%;margin-left:-75px;position: absolute;
}
