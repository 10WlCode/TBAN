jbMap = window.jbMap || {};
function jbViaJs(locationId) {
    var _f = undefined;
    var _fconv = 'jbMap[\"' + locationId + '\"]';
    try {
        _f = eval(_fconv);
        if (_f != undefined) {
            _f()
        }
    } catch(e) {}
}
function jbLoader(closetag) {
    var jbTest = null,
    jbTestPos = document.getElementsByTagName("span");
    for (var i = 0; i < jbTestPos.length; i++) {
        if (jbTestPos[i].className == "jbTestPos") {
            jbTest = jbTestPos[i];
            break
        }
    }
    if (jbTest == null) return;
    if (!closetag) {
        document.write("<span id=jbTestPos_" + jbTest.id + " style=display:none>");
        jbViaJs(jbTest.id);
        return
    }
    document.write("</span>");
    var real = document.getElementById("jbTestPos_" + jbTest.id);
    for (var i = 0; i < real.childNodes.length; i++) {
        var node = real.childNodes[i];
        if (node.tagName == "SCRIPT" && /closetag/.test(node.className)) continue;
        jbTest.parentNode.insertBefore(node, jbTest);
        i--
    }
    jbTest.parentNode.removeChild(jbTest);
    real.parentNode.removeChild(real)
}

//var logo_m='<a href="http://youhui.aliyunm.com" target="_blank"><img src="//files.jb51.net/image/aliyun_dy.jpg?1029" width=370 height=60 /></a>';
var logo_m='<a href="http://ke.jb51.net/" target="_blank"><img src="//files.jb51.net/image/ke_370.gif" width=370 height=60 /></a>';
var logo_r='<a href="https://818ps.com/?user_source=r4292&route_id=15380213206763&route=1" target="_blank"><img src="//files.jb51.net/image/818ps.gif?1030" width=370 height=60 /></a>';

var aliyun1000='';
aliyun1000+='<div class="mainlr"><a href="https://www.xrcloud.net/ruicloud/fractive?from=6U4L76fx740W" target="_blank"><img src="//files.jb51.net/image/xinruiyun.png" alt="xinrunyun" width="1080" height="50"></a></div>';
aliyun1000+='<div class="blank5"></div><div class="mainlr"><a href="http://e.cn.miaozhen.com/r/k=2100231&p=7IsSK&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&o=https://bearychat.com/robot?utm_source=jb51&utm_medium=banner" target="_blank"><img src="//files.jb51.net/image/chat.png?1025" alt="chat" width="1080" height="50"></a></div>';
var aliyun10002='<div class="mainlr"><a href="http://27.2wk.com/" target="_blank"><img src="//files.jb51.net/image/27pan.jpg" alt="27pan" width="1080" height="50"></a></div>';		
//aliyun10002+='<div class="blank5"></div><div class="mainlr"><iframe src="https://www.jb51.net/static/zbj.html" width="1080" height="60" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe></div>';	


var idctu="";
idctu+='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt><!--thea+300*250--><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px"data-ad-client="ca-pub-6389290466807248"data-ad-slot="6788945816"></ins><scr'+'ipt>(adsbygoogle=window.adsbygoogle||[]).push({});</scr'+'ipt>';
//idctu+='<div class="blank5"></div><A href="http://click.aliyun.com/m/21950/" target=_blank><IMG alt="" src="//files.jb51.net/image/ali_300_1.jpg" width="300" height="100"></A>';
idctu+='<div class="blank5"></div><A href="http://27.arrowshoe.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/37cdn.jpg" width="300" height="100"></A>';


//idctu+='<div class="blank10"></div><iframe src="https://www.jb51.net/static/zbj.html?id=300250" width="300" height="250" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>';


var aliwenzi='<li><a href="http://click.aliyun.com/m/15321/" target="_blank"><span style="color:red;">30余款阿里云产品免费6个月</span></a></li>';
var ali237='<li><A href="http://click.aliyun.com/m/28331/" target=_blank><IMG alt="" src="//files.jb51.net/image/ali2650323.gif" width="211" height="50"></A></li>';
var ali2371='<li><A href="http://click.aliyun.com/m/17168/" target=_blank><IMG alt="" src="//files.jb51.net/image/ali2371.jpg" width="211" height="50"></A></li>';

var tgtxt="";
tgtxt+='<div class="blank5"></div><div id="txtlink"><ul>';
tgtxt+='<li><a href="http://www.2016idc.com/cdn.html" target="_blank"><span style="color:red;">◆◆◆◆◆高防免备案CDN◆◆◆◆◆</span></a></li>';
tgtxt+='<li><a href="http://www.zoneidc.com/" target="_blank"><span style="color:red;">1G香港/美国/韩国等十五国云9.9元/月</span></a></li>';
tgtxt+='<li><a href="https://m.aliyun.com/act/team1111/#/share?params=N.EN2hxhpNQG.3ow2kbko" target="_blank"><span style="color:red;">██拼团分享阿里云300万现金██</span></a></li>';
tgtxt+='<li><a href="https://www.eidc.cn/servers/eidc-g/hkhk.php/" target="_blank"><span style="color:red;">『秒开』380元香港★韩国★美国服务器</span></a></li>';

tgtxt+='<li><a href="http://www.ssf.cc/" target="_blank"><span style="color:blue;">免备vps20/百独799/双线350/45互联</span></a></li>';
tgtxt+='<li><a href="http://www.fxyzm.com:9000/" target="_blank"><span style="color:blue;">飞讯验证码/接码平台/低至7分/作者提成高</span></a></li>';
tgtxt+='<li><a href="http://www.osssnet.com/" target="_blank"><span style="color:blue;">◆50M香港/美国/日本服务器380免备案◆</span></a></li>';
tgtxt+='<li><a href="https://818ps.com/?user_source=r4293&route_id=15380213206763&route=1" target="_blank"><span style="color:blue;">██程序员设计师不学PS  3秒就出图██</span></a></li>';

tgtxt+='<li><a href="https://www.guowaidiaocha.com/" target="_blank"><span style="color:red;">★国外网赚月入两万，一对一教学带你★</span></a></li>';
tgtxt+='<li><a href="http://ok095.com/" target="_blank"><span style="color:red;">全网最新空手套白狼网赚项目实时结算</span></a></li>';
tgtxt+='<li><a href="http://www.hkcn2.com/51.htm" target="_blank"><span style="color:red;">**香港高防10m大带宽独服，低至999元**</span></a></li>';
//tgtxt+='<li><a href="http://ke.jb51.net" target="_blank"><span style="color:red;">脚本之家云课堂</span></a></li>';
tgtxt+='<li><a href="http://www.yima998.com" target="_blank"><span style="color:red;">一码平台/接码平台/百万卡在线/作者提成15%</span></a></li>';

//tgtxt+='<li><a href="http://az.workwang.xyz/az/" target="_blank"><span style="color:blue;">★★★网赚达人日赚800★★★</span></a></li>';
//tgtxt+='<li><a href="http://az.workwang.xyz/az/" target="_blank"><span style="color:blue;">★★★网赚达人日赚800★★★</span></a></li>';
tgtxt+='<li><a href="http://www.pppoevps.com/" target="_blank"><span style="color:blue;">█动态拨号IP云主机，电信ADSL独享20M█ </span></a></li>';
tgtxt+='<li><a href="http://www.ku86.com/" target="_blank"><span style="color:blue;">百兆 12核24线程 16G内存 2T 999/月</span></a></li>';
tgtxt+='<li><a href="http://ke.jb51.net/" target="_blank"><span style="color:blue;">脚本之家云课堂</span></a></li>';
tgtxt+='<li><a href="http://ke.jb51.net/" target="_blank"><span style="color:blue;">脚本之家云课堂</span></a></li>';

tgtxt+='<li><a href="http://www.7yc.com/rent.html" target="_blank"><span style="color:red;">██云彩网络██100G防服务器450元</span></a></li>';
tgtxt+='<li><a href="https://www.50vm.com/" target="_blank"><span style="color:red;">4核独服199/16核独服360|创梦网络</span></a></li>';
tgtxt+='<li><a href="http://www.gwidc.com/rent/home/index.html" target="_blank"><span style="color:red;">港湾网络-徐州百独16核16G 800/月~</span></a></li>';
tgtxt+='<li><a href="http://t.cn/Evui3ph" target="_blank"><span style="color:red;">【10元钱】500G学习资源/python/php/java</span></a></li>';

tgtxt+='<li><a href="http://www.ushk.net/server.html" target="_blank"><span style="color:blue;">██美港数据██高端香港服务器租用</span></a></li>';
tgtxt+='<li><a href="http://vps.zzidc.com/tongji/jb51w.html" target="_blank"><span style="color:blue;">★☆云服务器5折，天天抽红包抵扣☆★</span></a></li>';
tgtxt+='<li><a href="http://www.enkj.com/idc/zuyong/6" target="_blank"><span style="color:blue;">【亿恩】DELL品牌服务器，月付599元起</span></a></li>';
tgtxt+='<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:blue;">韩国香港美国站群服务器 巨牛网络</span></a></li>';

tgtxt+='<li><a href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target="_blank"><span style="color:red;">█▇▆5M独享云主机599/年▆▇█</span></a></li>';
tgtxt+='<li><a href="http://www.qy.com.cn/" target="_blank"><span style="color:red;">群英云服务器送10M带宽30G防御,49元起</span></a></li>';
tgtxt+='<li><a href="http://www.tuidc.com/" target="_blank"><span style="color:red;">服务器租用/托管-域名空间/认准腾佑科技</span></a></li>';
tgtxt+='<li><a href="http://www.jjidc.com/" target="_blank"><span style="color:red;">九九数据 — 工信部认可正规资质IDC接入商</span></a></li>';

tgtxt+='<li><a href="https://www.95idc.com" target="_blank"><span style="color:blue;">95IDC█香港沙田CN2服务器 599/月</span></a></li>';
tgtxt+='<li><a href="http://www.zitian.cn/" target="_blank"><span style="color:blue;">中原地区核心数据中心，月付299元起</span></a></li>';
tgtxt+='<li><a href="http://www.qy.cn/gfhd.html" target="_blank"><span style="color:blue;">██群英网络██◆◆◆300G高防仅需599元◆◆◆</span></a></li>';
tgtxt+='<li><a href="http://www.pdidc.com/" target="_blank"><span style="color:blue;">浦东数据中心上海电信4星云主机30元/月起</span></a></li>';

tgtxt+='<li><a href="http://www.139w.com/" target="_blank"><span style="color:red;">鼎点网络百兆独享服务器仅需999元</span></a></li>';
tgtxt+='<li><a href="http://www.360jq.com/hkshuang.htm" target="_blank"><span style="color:red;">[香港双高防]无视CC★DDOS/堪比广东！</span></a></li>';
tgtxt+='<li><a href="http://www.cyidc.cc/" target="_blank"><span style="color:red;">畅游网络 百独服务器 包跑满 998元</span></a></li>';
tgtxt+='<li><a href="http://www.wdw6.com/" target="_blank"><span style="color:red;">bgp多线机房、大带宽</span></a></li>';

tgtxt+='</ul><DIV class=clearfix></DIV></div>';

var tonglan1="";
tonglan1+=aliyun1000;
tonglan1+=tgtxt;
tonglan1+='<div class="blank5"></div>';
tonglan1+='<div class="topimg"><ul>';
tonglan1+='<li><A href="http://www.ruixunidc.net/Promot/promdetails/details/56.html" target=_blank><IMG alt="" src="//files.jb51.net/image/ruixun.gif?1022" width="210" height="50"></a></li>';
//tonglan1+=ali2371;
tonglan1+='<li><A href="https://www.guowaidiaocha.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/wenjuan51.png?1029" width="210" height="50"></A></li>';
tonglan1+='<li><A href="http://www.iis7.com/b/wzjk/?jb51.net" target=_blank><IMG alt="" src="//files.jb51.net/image/iis7.gif?1015" width="210" height="50"></A></li>';
tonglan1+='<li><A href="https://www.7e.hk/vps/" target=_blank><IMG alt="" src="//files.jb51.net/image/7ehk.gif?1010" width="210" height="50"></A></li>';
tonglan1+='<li><A href="http://www.plaidc.com/" target=_blank><IMG alt="" src="https://files.jb51.net/image/plaidc.gif" width="210" height="50"></A></li>';
tonglan1+='</ul></div><div class="blank5"></div>';
tonglan1+=aliyun10002;

var tonglan1_2="";
tonglan1_2+=aliyun1000;
tonglan1_2+=tgtxt;
tonglan1_2+='<div class="blank5"></div>';
tonglan1_2+='<div class="topimg"><ul>';
tonglan1_2+='<li><A href="http://t.cn/Evui3ph" target=_blank><IMG alt="" src="//files.jb51.net/image/tb_210_50.gif?1008" width="265" height="50"></A></li>';
tonglan1_2+='<li><A href="http://www.jb51.cn/" target=_blank><IMG alt="" src="//files.jb51.net/image/jb51cn.gif?0920" width="210" height="50"></A></li>';
//tonglan1_2+=ali237;
tonglan1_2+='<li><A href="http://www.ku86.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/ku86_237.gif?1010" width="210" height="50"></A></li>';
tonglan1_2+='<li><A href="http://www.wsisp.com" target=_blank><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="265" height="50"></A></li>';
tonglan1_2+='</ul></div><div class="blank5"></div>';

var tonglan2='<a href="http://www.v01.cn" alt="上海众生" target="_blank"><img src="//files.jb51.net/image/zs960.gif" width="1000" height="60" border="0" /></a><div class="blank3"></div><a href="http://tuidc.com" alt="香港主机 国外主机" target="_blank"><img src="//files.jb51.net/image/host5_960.gif" width="1000" height="60" border="0" /></a>';
var tonglan2_1='<a href="http://www.v01.cn" alt="上海众生" target="_blank"><img src="//files.jb51.net/image/zs1080.gif" width="1080" height="50" border="0" /></a>';
var tonglan2_2='<a href="http://www.tuidc.com" alt="腾佑" target="_blank"><img src="//files.jb51.net/image/tuidc1080.gif" width="1080" height="50" border="0" /></a>';

var tonglan3_1='<div class="mainlr"><a href="http://www.qy.cn/15carnival.html/?f=jb51" target="_blank"><img src="//files.jb51.net/image/qy1080.gif?0723" width="1080" height="50"></a></div><div class="blank5"></div>';

var tonglan3_2='<div class="topimg"><ul>';
tonglan3_2+='<li><A href="http://www.wsisp.com" target=_blank><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.jjidc.com" target=_blank><IMG alt="" src="//files.jb51.net/image/jjidc237.gif" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.enkj.com/gfcloud/" target=_blank><IMG alt="" src="//files.jb51.net/image/enkj0810.gif" alt="云服务器" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.cyidc.cc/" target=_blank><IMG alt="" src="//files.jb51.net/image/cyidc237.gif" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://tools.jb51.net" target=_blank><IMG alt="" src="//files.jb51.net/image/tools.gif" width="210" height="50"></a></li>';
tonglan3_2+='</ul></div>';

var tonglan3_3='<div class="mainlr"><a href="http://www.qy.com.cn" target="_blank"><img src="//files.jb51.net/image/qy_1000.gif" width="1080" height="50"></a></div><div class="blank5"></div>';

var botad='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
botad+='<ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6445926239" data-override-format="true" data-page-url="http://www.jb51.net"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';

var idctu1='<div class="idc3"><a href="http://www.021.net" target="_blank"><h1>众生网络</h1><span>品牌服务器租用</span> </a><a href="http://www.geisnic.com/" target="_blank"><h1>集思网络</h1><span>VPS主机</span> </a><a href="http://www.33ip.com" target="_blank"><h1>枫信科技</h1><span>IDC服务商</span> </a></div>';

var idctu2='<a href="http://tuidc.com" target="_blank"><img src="//files.jb51.net/image/tengyou300.gif" width="300" height="100"></a>';
idctu2+='<div class="blank5"></div><a href="http://www.enkj.com/special/cloud180905/" target="_blank"><img src="//files.jb51.net/image/enkj300.gif?1025" alt="云服务器" width="300" height="100"></a>';
//idctu2+='<div class="blank5"></div><iframe src="//www.jb51.net/static/zbj.html?id=300250" width="300" height="250" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>';
idctu2+='<div class="blank10"></div><iframe src="https://www.jb51.net/static/zbj.html?id=300100" width="300" height="100" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>';


/*******---------在线工具start----------********/
var bctools='<li><a href="http://tools.jb51.net/code/css" target="_blank"><font color="red">CSS代码工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/js" target="_blank"><font color="red">JavaScript代码格式化工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/xmlformat" target="_blank">在线XML格式化/压缩工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/phpformat" target="_blank"><font color="red">php代码在线格式化美化工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/sqlcodeformat" target="_blank">sql代码在线格式化美化工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/transcoding/html_transcode" target="_blank">在线HTML转义/反转义工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/json" target="_blank">在线JSON代码检验/检验/美化/格式化</a></li>';
bctools+='<li><a href="http://tools.jb51.net/regex/javascript" target="_blank">JavaScript正则在线测试工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/transcoding/jb51qrcode" target="_blank">在线生成二维码工具(加强版)</a></li>';
bctools+='<li><a href="http://tools.jb51.net/" target="_blank">更多在线工具</a></li>';
/*******---------在线工具end----------********/


//u336546
var tonglanbd='<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/cmds5flr1.js"></scr'+'ipt>';

var tonglangg='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
tonglangg+='<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="9750602991"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

var tonglan_1024 = '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/lgypohpyo.js"></scr'+'ipt>';
//var art_up = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/gn3a1ecf96f1ccff30db1c7481b2b03ded00b3930a3ef6.js"></s'+'cript>';

var tit_down = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/uphlhyovv.js"></s'+'cript>';
//var art_up = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/lgyyhcphi.js"></s'+'cript>';
var art_up = '<a href="http://www.php.cn/course.html?ad51" target="_blank"><img src="//files.jb51.net/image/phpcn.gif?1026" width="690" height="99"></a>';

var art_bot='';
if("undefined" != typeof lmname && lmname == "python"){
	art_bot+='<a href="http://t.cn/EvW2xxO" target="_blank"><img src="//files.jb51.net/image/python_tb.png?0918" width="700" height="100" class="nohref"></a>';
}
if("undefined" != typeof lmname && lmname == "PHP编程"){
	art_bot+='<a href="http://t.cn/EvW2Wb8" target="_blank"><img src="//files.jb51.net/image/php_tb.png?0918" width="700" height="100" class="nohref"></a>';
}
if("undefined" != typeof lmname && lmname == "java"){
	art_bot+='<a href="http://t.cn/EvW2KVe" target="_blank"><img src="//files.jb51.net/image/java_tb.png?0918" width="700" height="100" class="nohref"></a>';
}
if("undefined" != typeof lmname && lmname == "JavaScript"){
	art_bot+='<a href="http://t.cn/Ev8Zbz6" target="_blank"><img src="//files.jb51.net/image/js_tb.png?0918" width="700" height="100" class="nohref"></a>';
}
if("undefined" != typeof lmname && lmname == "CSS/HTML"){
	art_bot+='<a href="http://t.cn/Ev8Zbz6" target="_blank"><img src="//files.jb51.net/image/js_tb.png?0918" width="700" height="100" class="nohref"></a>';
}
if("undefined" != typeof lmname && lmname == "AJAX相关"){
	art_bot+='<a href="http://t.cn/Ev8Zbz6" target="_blank"><img src="//files.jb51.net/image/js_tb.png?0918" width="700" height="100" class="nohref"></a>';
}



//var art_bot='<iframe src="//icws.jb51.net/inc/tpshop.html" width="690" height="99" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>';
/*var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
var isFirefox = window.navigator.userAgent.indexOf("Firefox") !== -1;
  if (isChrome || isFirefox) {
art_bot='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-6384567588307613" data-ad-slot="1322220884"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</sc'+'ript>';
//art_bot='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></sc'+'ript><ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="1751705530"></ins><scr'+'ipt>(adsbygoogle = window.adsbygoogle || []).push({});</sc'+'ript>';
  } else {
//art_bot='<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/pkccmmzhm.js"></sc'+'ript>';
  }
*/
//u3025827(u776243)
//var art_down = '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/site/api/1s307x.js?lgypof=dip"></scr'+'ipt>';
//var art_down2 = '<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/common/web/resource/vc0v.js?fasjibjz=g"></s'+'cript>';
var art_down ='';
var art_down2 ='';
if("undefined" != typeof lmname && lmname == "易语言"){
	art_down +='<scr'+'ipt type="text/javascript" src="jscode.jbzj.com/site/source/h1mm45.js?fasxzxxg=s"></scr'+'ipt>';
	art_down2 +='<scr'+'ipt type="text/javascript" src="jscode.jbzj.com/source/resource/production/h3d2y9.js?l=gydfddmo"></scr'+'ipt>';
}else{
    art_down += '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/site/api/1s307x.js?lgypof=dip"></scr'+'ipt>';
	art_down2 += '<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/common/web/resource/vc0v.js?fasjibjz=g"></s'+'cript>';
}

var list_r_r300 = '<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/common/static/js/2f9w.js?cxtwdu=wg"></s'+'cript>';

var art_xg = '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/production/source/common/46pg.js?dyqhaquu=n"></scr'+'ipt>';

//var art_down3 = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/mhzqnndqnkon.js"></s'+'cript>';

var side_up = '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
side_up+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2817964327"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

//var side_up = '<sc'+'ript type="text/javascript" src="//jscode.jbzj.com/faswjbzpw.js"></sc'+'ript>';

var r_2 = '<script type="text/javascript">var cpro_id="u1397867";(window["cproStyleApi"] = window["cproStyleApi"] || {})[cpro_id]={at:"3",rsi0:"300",rsi1:"380",pat:"6",tn:"baiduCustNativeAD",rss1:"#FFFFFF",conBW:"1",adp:"1",ptt:"0",titFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91",titFS:"14",rss2:"#000000",titSU:"0",ptbg:"90",piw:"0",pih:"0",ptp:"0"}</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>';

var fudong=r_2;

var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);

var gg_l = '';
/*if("undefined" != typeof tougao && projectName=='photoshop'){
	gg_l +='<a href="https://huke88.com/?source=jb51" target="_blank"><img src="//files.jb51.net/image/ps300.png?0926" width="300" height="250" class="nohref" data-baiduimageplus-ignore=""></a>';
}else{*/
gg_l += '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
gg_l += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6438537127"></ins>';
gg_l += '<scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
//}
//var gg_l= '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/lgycphfyo.js"></scr'+'ipt>';

//u811641
var gg_r = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/bwyffvsfzdec.js"></sc'+'ript>';

//var r1gg=side_up;

var r1gg='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
r1gg+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2817964327"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

//var r1gg = '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-1247620132145618" data-ad-slot="2253650178" data-override-format="true" data-page-url="http://www.jb51.net"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

//u2261513
//var bd200 = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/hod9xqa8sj.js"></sc'+'ript>';

var bd200 = '<scri'+'pt type="text/javascript">var cpro_id="u2261513";(window["cproStyleApi"] = window["cproStyleApi"] || {})[cpro_id]={at:"3",rsi0:"300",rsi1:"300",pat:"6",tn:"baiduCustNativeAD",rss1:"#FFFFFF",conBW:"1",adp:"1",ptt:"0",titFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91",titFS:"14",rss2:"#000000",titSU:"0",ptbg:"90",piw:"0",pih:"0",ptp:"0"}</sc'+'ript>';
bd200 += '<scrip'+'t src="//cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></scr'+'ipt>';

var dxy728 = '<a href="http://www.33ip.com" target="_blank"><img src="//files.jb51.net/image/33ip_728.gif"></a>';
var dxy320 = '<a href="http://edu.jb51.net/" target="_blank"><img src="//files.jb51.net/image/edu320.png" width=320 height=90></a>';

//u1424765
var qq_index = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/rldzo3l5kz.js"></scri'+'pt>';

jbMap['logo_m'] = function() {
	document.writeln(logo_m);
};

jbMap['logo_r'] = function() {
	document.writeln(logo_r);
};

jbMap['idctu'] = function() {
	document.writeln(idctu);
};

jbMap['tonglanbd'] = function() {
	document.writeln(tonglanbd);
};

jbMap['tonglangg'] = function() {
	document.writeln(tonglangg);
};

jbMap['tonglan1'] = function() {
	document.writeln(tonglan1);
};

jbMap['tonglan1_2'] = function() {
	document.writeln(tonglan1_2);
};

jbMap['tonglan2'] = function() {
	document.writeln(tonglan2);
};

jbMap['tonglan2_1'] = function() {
	document.writeln(tonglan2_1);
};

jbMap['tonglan2_2'] = function() {
	document.writeln(tonglan2_2);
};

jbMap['tonglan3_1'] = function() {
	document.writeln(tonglan3_1);
};

jbMap['tonglan3_2'] = function() {
	document.writeln(tonglan3_2);
};

jbMap['tonglan3_3'] = function() {
	document.writeln(tonglan3_3);
};

jbMap['tonglan_1024'] = function() {
	document.writeln(tonglan_1024);
};

jbMap['botad'] = function() {
	document.writeln(botad);
};

jbMap['idctu1'] = function() {
	document.writeln(idctu1);
};

jbMap['idctu2'] = function() {
	document.writeln(idctu2);
};

jbMap['tit_down'] = function() {
	document.writeln(tit_down);
};

jbMap['art_up'] = function() {
	document.writeln(art_up);
};

jbMap['art_bot'] = function() {
	document.writeln(art_bot);
};

jbMap['art_down'] = function() {
	document.writeln(art_down);
};

jbMap['art_down2'] = function() {
	document.writeln(art_down2);
};

jbMap['list_r_r300'] = function() {
	document.writeln(list_r_r300);
};

jbMap['art_xg'] = function() {
	document.writeln(art_xg);
};

jbMap['side_up'] = function() {
	document.writeln(side_up);
};

jbMap['r_2'] = function() {
	document.writeln(r_2);
};

jbMap['fudong'] = function() {
	document.writeln(fudong);
};


jbMap['gg_l'] = function() {
	document.writeln(gg_l);
};

jbMap['gg_r'] = function() {
	document.writeln(gg_r);
};

jbMap['r1gg'] = function() {
	document.writeln(r1gg);
};

jbMap['bd200'] = function() {
	document.writeln(bd200);
};


jbMap['bctools'] = function() {
	document.writeln(bctools);
};

jbMap['dxy728'] = function() {
	document.writeln(dxy728);
};

jbMap['dxy320'] = function() {
	document.writeln(dxy320);
};

jbMap['qq_index'] = function() {
	document.writeln(qq_index);
};

(function() {
  var url = "https://g.cn.miaozhen.com/x/k=2100231&p=7IsSK&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&tr=__REQUESTID__&o=";
  var img =  new Image(1,1);
  img.onload = img.onerror = function() {};
  img.src = url;
})();

if (jQuery) { 
/*$jb51_top = $('#jb51_topbar');
if($jb51_top){
    $jb51_top.html('<div class="userbar"><a href="http://tougao.jb51.net" target="_blank">投稿中心</a><img style="width:32px; height:22px" src="http://img.jb51.net/skin/2016/images/newn.gif" alt="hot"></div>');
}

$addnav = $('.watch');
if($addnav){
    $addnav.before('<li><div class="one"><a href="http://wxbj.jb51.net" target="_blank">微信编辑器</a></div></li>');
	$(".watch .one a").attr("href","http://www.jb51.net/about.htm");
}*/

$yuanshichang = $('.topToolsLeft');
if($yuanshichang){
	$yuanshichang.append('<a href="https://www.yuanshichang.com/" target="_blank" style="color:red">源码商城</a><a href="http://idc.jb51.net/" target="_blank" style="color:red">脚本云</a><a href="http://ke.jb51.net/" target="_blank" style="color:red">脚本云课堂</a>');
}
if ("undefined" != typeof ourl) {
    if (ourl) {
        $content = $('#content');
        if($content){
			if(ourl.indexOf(":") > 0 ){
            $content.append('<p>原文链接：' + ourl +'</p>');
			}else{
			$content.append('<p>原文链接：' + base64decode(ourl) +'</p>');
			}
        }
    }
}
$(function(){ 
var vzl=document.getElementById('txtlink').getElementsByTagName('span'),j=0;
for(var i=0;i<vzl.length;i++){
	j=i%4?j:++j;
	vzl[i].style=j%2?'color:red':'color:blue';
}
}); 


var shequlink = '<div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/jb51ewm.png" /></div><div class="fr"><p>微信公众号搜索 “ <span>脚本之家</span> ” ，选择关注</p><p>程序猿的那些事、送书等活动等着你</p></div></div>';
var newslink = '<div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/itewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>IT服务圈儿</span> ” ，选择关注</p><p>每日十点播报，把握行业热点，紧跟行业脚步</p></div></div>';
$content = $('#content');
if("undefined" != typeof downlm && downlm == "art-news"){
	if($content){$content.append(newslink);}
}else{
    if($content){$content.append(shequlink);}
}

$topnum = $('.newsList.newList-in');
if("undefined" == typeof tougao){
	if($topnum){$topnum.append('<li><EM class="no11">11</EM><a href="https://www.xrcloud.net/ruicloud/fractive?from=6U4L76fx740W" title="【新睿云】2核4G云服务器0元／年" target="_blank">【新睿云】2核4G云服务器0元／年</a></li>');}
}
//var el = $('#footer'); 
//el.html(el.html().replace(/脚本之家/ig, '徐州蓝佳网络科技有限公司'));

/*if(getCookie("zfbhb")!="ok"){
	$('#content').append('<div id="hbbox"><a href="http://dwz.cn/7oNQfU" target="_blank"><img src="//files.jb51.net/image/0yg.jpg"></a></div>');
	setCookie("zfbhb","ok");
}
var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);
if("undefined" != typeof tougao && projectName=='3DMAX'){
$('.article-right').prepend("<div class='r300 clearfix mb10'><a href='https://jq.qq.com/?_wv=1027&k=5IxNMeP' target='_blank'><img src='//files.jb51.net/image/3dmax300.gif?0613' width='300' height='200'></a></div>");
}
if("undefined" == typeof tougao){
$('.article-right').prepend("<div class='r300 clearfix mb10'><a href='http://tg.iopen.com.cn/pc/jbzj/index.html?utm_source=jiaobenzhijia' target='_blank'><img src='//files.jb51.net/image/iopen250.gif'></a></div>");
}*/	
}
