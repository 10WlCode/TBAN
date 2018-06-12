jQuery(document).ready(function($){
$("#menu ul li#on,#menu ul li.page_item,#menu ul li.cat-item").hover(function(){$(this).stop().animate({paddingTop:"+=6"},240)},function(){$(this).stop().animate({paddingTop:"0"},120)});
$("#postlist .post-home .post-title h2 a,#tab-content ul li a").hover(function(){$(this).stop().animate({marginLeft:"+=8"},250)},function(){$(this).stop().animate({marginLeft:"0"},150)})
$('#tab-title span').click(function(){$(this).addClass("selected").siblings().removeClass();$("#tab-content > ul").slideUp('1500').eq($('#tab-title span').index(this)).slideDown('1500')});
$('#comments .vcard a').attr({target:"_blank"});$("#comments .commentmetadata span").click(function(){$(this).toggleClass('click').parent().parent().next('.children').slideToggle('1500');});$('#comments .comment-body').dblclick(function(){if($(this).next('#respond').length > 0) {$('#cancel-comment-reply a').click()}else{$(this).children('.reply').children('a').click()}return false});$('#comments .live').live('dblclick',function(){$(this).next().children('a').click()});
$('a,input[type="submit"],object').bind('focus',function(){if(this.blur){ this.blur();}});

(function(){
	$("#rss,#feed").hover(function(){
		if(!$("#rss").children("ul").is(":animated")){
			$("#rss").children("ul").slideDown("800");
		}
	},function(){
		$("#rss").children("ul").slideUp("400");
	});

	//移除 more
	$('.content_banner .text p a.more-link').remove();

    //Alloyteam 招聘广告
    window.console && console.log && console.log("\n"+"   _    _  _                _____                         \n  \/_\\  | || |  ___   _   _ \/__   \\  ___   __ _  _ __ ___  \n \/\/_\\\\ | || | \/ _ \\ | | | |  \/ \/\\\/ \/ _ \\ \/ _` || '_ ` _ \\ \n\/  _  \\| || || (_) || |_| | \/ \/   |  __\/| (_| || | | | | |\n\\_\/ \\_\/|_||_| \\___\/  \\__, | \\\/     \\___| \\__,_||_| |_| |_|\n                     |___\/\n\n 欢迎加入AlloyTeam：请将简历(邮件标题后面再加上'from console')发送至 %c Kinvix@QQ.com \n", "color:red");
})();

});
jQuery(function(){
	var arr = jQuery('.crayon-syntax');
	for (var i = arr.length - 1; i >= 0; i--) {
		var h = jQuery(arr[i]).height();
		jQuery(arr[i]).height(h+5);
	};
	
});


