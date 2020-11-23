var hdtoHeight = 80, amTime = 5, amTime2 = 10, hdstate = 0;

$(window).scroll(function() {

	hdbtsl();

	var hdtoTop = parseInt($(".head_ad").height()+ hdtoHeight);

	if ($(window).scrollTop() > hdtoTop && hdstate == 0){

		addhdfloat();

		hdstate = 1;

	} else if ($(window).scrollTop() < hdtoTop && hdstate == 1){

		removehdfloat();

		hdstate = 0;

	}
});

function addhdfloat(){

		$("#head").animate({height:"80px"},amTime, function(){

		$(".head").removeClass("hdbk");

		$("#head").addClass("hdfloat");

		});

		$(".head_logo a").animate({height:"80px"},amTime2);

		$('#toTop').show();

}

function removehdfloat(){

		$("#head").animate({height:"130px"},amTime, function(){

		$(".head").addClass("hdbk");

		$("#head").removeClass("hdfloat");

		});

		$(".head_logo a").animate({height:"90px"},amTime2);

		$('#toTop').hide();

}


function showsearch(){

    if($(".hdifani").css("display")!="none"){

	$("#search_key").css('display','block');

	$("#hds_inp").css('display','block');

	$(".hdifani").css('display','none');

	$("#hds_inp").animate({width:"130px"},400);

	$("#hds_inp").focus();

    }
}


function hdbtsl(){

	var bh = window.innerHeight || document.documentElement.clientHeight;

	var bw = window.innerWidth || document.documentElement.clientWidth;

	var rt=1238-bw-$(window).scrollLeft();

	if (bw<1220){

		$(".head_rt").css('right',rt+'px');

	}else{

		$(".head_rt").css('right','0px');

	}
}

function hdbtwidth(){

	var bh = window.innerHeight || document.documentElement.clientHeight;

	var bw = window.innerWidth || document.documentElement.clientWidth;

	var rt=1238-bw;

	if (bw<1200){

		$(".hdfloat .head_bd").css('margin','0 0 0 30px');

	}else{

		$(".hdfloat .head_bd").css('margin','0 auto');

	}

	if (bw<1220){

		$(".head_rt").css('right',rt+'px');

	}else{

		$(".head_rt").css('right','0px');

	}


	$("#head").css('width','100%');

	$(".head").css('width','100%');

}





$(function(){


	hdbtwidth();


	var timeFunName = null;

	$("#hdshowsearch").bind("click",function(){

		clearTimeout(timeFunName);

		timeFunName = setTimeout(function () {

			showsearch();

		}, 400);

	}).bind("dblclick",function(){

		clearTimeout(timeFunName);
		showsearch();

	});


    var asktimeFunName = null;


    
	$(document).bind("click",function(e){

	  var target  = $(e.target);

	  if(target.closest(".hdif_s").length == 0){

		$("#hds_inp").animate({width:"0px"},400, function(){

			$("#hds_inp").css('display','none');

			$(".hdifani").css('display','block');

			$("#search_key").css('display','none');

		});

	  }

	});


	$('.bn_bt .slider').css('opacity',0);

	$(".head_banner .bn_bt").hover(function(){

			$(this).children(".bn_a").addClass("on");

			$(this).siblings(".bn_bt").children(".bn_a").removeClass("on");

			$(this).children(".slider").css("display","block").stop(true,false).animate({opacity:1},400);

			$(this).children(".bn_a").children("span").css("display","none");


	},function(){

			$("#select").parent().siblings(".bn_bt").children(".bn_a").removeClass("on");

			$(this).children(".slider").css({display:"none",opacity:"0"});

			$(this).children(".bn_a").children("span").css("display","block");

	});

	$(document).bind("mouseover",function(e){

	  var target  = $(e.target);

	  if(target.closest(".head_banner").length == 0){

		$("#select").addClass("on").parent().siblings(".bn_bt").children(".bn_a").removeClass("on");

		$(".slider").each(function(){

			$(this).css("display","none");

		});

	  }

	});




    
	$(".slider li").live({

		mouseover: function() {

			$(this).children(".li_prompt").css("display","");

		},

		mouseout: function() {

			$(this).children(".li_prompt").css("display","none");

		}

	});




})






		/**
		 * 首页幻灯片
		 */

var ImageSlide_Simple_0=function(e){this.project=W(e.project),this.content=this.project.query(e.content),this.tigger=this.project.query(e.tigger),this.watch=this.project.query(e.watch),this.isAuto=e.auto||!0,this.max=0,this.contents=[],this.init()};ImageSlide_Simple_0.prototype.init=function(){this.register(),this.set(),this.isAuto&&this.auto()},ImageSlide_Simple_0.prototype.set=function(){var e=this,t=e.partner;this.select(),this.map(),this.max=e.contents.length},ImageSlide_Simple_0.prototype.map=function(){var e=this,t=[],n=e.content;n.forEach(function(e,n){W(e).hasClass("hz")||t.push(n)}),e.contents=t},ImageSlide_Simple_0.prototype.register=function(){var e=this;this.tigger.forEach(function(t,n){W(t).on("mouseover",function(){return e.stop(),e.show(n),!1})}),this.watch.forEach(function(t,n){W(t).on("mouseup",function(){e.stop(),this.className+=" down"}),W(t).on("mousedown",function(){e.stop(),this.className=this.className.replace("down","")}),W(t).on("mouseover",function(){W(this).removeClass("down")}),W(t).on("mouseout",function(){W(this).addClass("down")}),W(t).on("click",function(){var t=e.index(),n=e.contents,r=e.max;this.className.indexOf("pre")>=0&&(t=t-1<0?r-1:t-1),this.className.indexOf("nex")>=0&&(t=t+1>r-1?0:t+1),e.show(n[t])})}),this.project.on("mouseenter",function(){e.watch.css("display","inline-block"),e.stop()}),this.project.on("mouseleave",function(){e.watch.css("display","none"),e.auto()})},ImageSlide_Simple_0.prototype.index=function(){var e=-1,t=this,n=this.contents,r=this.content;for(var i=0,s=n.length;i<s;i++)r.item(n[i]).hasClass("current")&&(e=i);return e},ImageSlide_Simple_0.prototype.auto=function(){var e=this,t=e.max,n=e.contents;this.timer=setInterval(function(){var r=e.index();r=r>=t-1?0:r+1,e.show(n[r])},5e3)},ImageSlide_Simple_0.prototype.select=function(){var e=this,t=document.referrer,n=window.location.search,r=-1,i=e.content,s=e.tigger,o=null;for(var u=0,a=i.length;u<a;u++)o=i[u],o.id!=""&&n.indexOf(o.id)>-1?(r=u,i.item(u).removeClass("hz"),s.item(u).removeClass("hz")):!i.item(u).hasClass("hz")&&r<0&&(r=u);e.show(r)},ImageSlide_Simple_0.prototype.stop=function(){this.timer&&clearInterval(this.timer)},ImageSlide_Simple_0.prototype.show=function(e){this.tigger.removeClass("current").item(e).addClass("current"),this.content.removeClass("current").item(e).addClass("current")};


$(function () {
	/**
	 * 首页 今日头条
	 */
	 (function () {
	 	var sideMenu = $("div.sideMenu"); 
	 	if(sideMenu == "undefined") return ;
	 	var h3 = sideMenu.find("h3");
	 	var ul = sideMenu.find("ul");
	 	var activeNum = 0;	//	当前触发 num
	 	var isAct = true;		//	动画是否执行完毕
	 	ul.hide();
	 	avtive(4);
	 	h3.each(function (i) {
	 		(function (i) {
	 			h3.eq(i).mouseenter(function () {
	 				if (activeNum == i) return;
	 				avtive(i);
	 			});
	 		})(i)
	 	});
	 	function avtive (num) {
	 		if (!isAct) return;
	 		isAct = false;
	 		ul.eq(num).slideDown("normal");
	 		ul.eq(activeNum).slideUp("normal",function () {
	 			isAct = true;
	 		});
	 		activeNum = num;
	 	}
	 })()		
})