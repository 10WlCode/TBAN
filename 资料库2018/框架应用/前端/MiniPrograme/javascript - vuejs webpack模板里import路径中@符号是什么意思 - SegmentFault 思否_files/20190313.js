/**
 * Created by sf on 2018/8/3.
 */
var areaArr = []

var trackHost = 'https://segmentfault.com';
var viewApi = trackHost + '/ad/track/view'
var clickApi = trackHost + '/ad/track/click'

function ajax(opt) {
    opt = opt || {};//opt以数组方式存参，如果参数不存在就为空。
    opt.method = opt.method.toUpperCase() || 'POST';//转为大写失败，就转为POST
    opt.url = opt.url || '';//检查URL是否为空
    opt.async = opt.async || true;//是否异步
    opt.data = opt.data || null;//是否发送参数，如POST、GET发送参数
    opt.success = opt.success || function () {}; //成功后处理方式
    var xmlHttp = null;//定义1个空变量
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();//如果XMLHttpRequest存在就新建，IE大于9&&非IE有效
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//用于低版本IE
    }
    var params = [];//定义1个空数组
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);//将opt里的data存到push里
    }
    var postData = params.join('&');//追加个& params
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);//开始请求
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');//发送头信息，与表单里的一样。
        xmlHttp.send(postData);//发送POST数据
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url, opt.async);//GET请求
        xmlHttp.send(null);//发送空数据
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {//readyState有5个状态，可以百度一下看看都有什么。当请求完成，并且返回数据成功
            opt.success(xmlHttp.responseText);//返回成功的数据
        }
    };
}

var sTitle="";
window.SFGridAd = {};
SFGridAd.d = function(o) {
    sTitle = o.getAttribute('stitle');
    document.getElementById("gridMapHoverBox").style.display = "block"
}

SFGridAd.e = function(o) {
    sTitle = "";
    document.getElementById("gridMapHoverBox").style.display = "none"
}

SFGridAd.c = function(id) {

    var clickApi2 = clickApi + '?id=' + id

    ajax({url: clickApi2, method: 'GET'})
};

// 这里 data 需要注入
[{"id":"1750000018316599","user_id":"1030000016263412","box_ad_id":"0","started":"1551283200","ended":"1552492800","cycles":"2","status":"0","banner":"\/274\/450\/2744503121-5c75e62a32865","link":"https:\/\/www.3tee.cn\/index.html?source=segmentfault","title":"\u7eaf\u6d4f\u89c8\u5668\u89c6\u9891\u901a\u8baf\uff08WebRTC\uff09\uff0c\u5feb\u901f\u5d4c\u5165\uff0c\u6d59\u6c5f\u5927\u534e\u80a1\u4efd\u7b49\u90fd\u5728\u7528","area_info":{"area":"N1:O2","height":"34","width":"34","left":"221","top":"0","pos":{"rowTop":1,"rowBottom":2,"columnLeft":14,"columnRight":15},"size":4},"created":"1551230448","modified":"1551230657"},{"id":"1750000018316831","user_id":"1030000002496563","box_ad_id":"0","started":"1551283200","ended":"1553702400","cycles":"2","status":"0","banner":"\/696\/110\/696110750-5c75e95b49d72","link":"https:\/\/www.fundebug.com\/?utm_source=sf_lattice_ad","title":"\u4e00\u884c\u4ee3\u7801\u641e\u5b9aBUG\u76d1\u63a7","area_info":{"area":"G5:I5","height":"17","width":"51","left":"102","top":"68","pos":{"rowTop":5,"rowBottom":5,"columnLeft":7,"columnRight":9},"size":3},"created":"1551231261","modified":"1551231428"},{"id":"1750000018404262","user_id":"1030000005137413","box_ad_id":"0","started":"1551888000","ended":"1552492800","cycles":"1","status":"0","banner":"\/317\/578\/3175781286-5c7f38efca1e0","link":"https:\/\/github.com\/d2-projects\/d2-admin","title":"\u5f00\u6e90\u4e2d\u53f0\u524d\u7aef\u811a\u624b\u67b6","area_info":{"area":"H3:H3","height":"17","width":"17","left":"119","top":"34","pos":{"rowTop":3,"rowBottom":3,"columnLeft":8,"columnRight":8},"size":1},"created":"1551841317","modified":"1551841580"},{"id":"1750000018405894","user_id":"1030000000136768","box_ad_id":"0","started":"1552147200","ended":"1552752000","cycles":"1","status":"0","banner":"\/228\/834\/2288348423-5c828cc126ccb","link":"https:\/\/segmentfault.com\/g\/1570000018311706\/d\/1560000018440542","title":"\u521d\u521bFinTech\u516c\u53f8\u62db\u8058\u5168\u6808\u5de5\u7a0b\u5e08 \u6700\u597d\u6709\u6df7\u5408\u5f0fApp\u5f00\u53d1\u7ecf\u9a8c","area_info":{"area":"B2:E2","height":"17","width":"68","left":"17","top":"17","pos":{"rowTop":2,"rowBottom":2,"columnLeft":2,"columnRight":5},"size":4},"created":"1551847685","modified":"1552059616"},{"id":"1750000018407655","user_id":"1030000014460886","box_ad_id":"0","started":"1551888000","ended":"1552492800","cycles":"1","status":"0","banner":"\/248\/377\/2483779-5c7f6e0472590","link":"https:\/\/enhancer.io","title":"\u5199SQL\u5c31\u80fd\u5b8c\u6210\u7cfb\u7edf\u5f00\u53d1\uff0c\u7b80\u5355\uff0c\u5feb\u901f\uff0c\u5f3a\u5927\uff01","area_info":{"area":"B4:C5","height":"34","width":"34","left":"17","top":"51","pos":{"rowTop":4,"rowBottom":5,"columnLeft":2,"columnRight":3},"size":4},"created":"1551855070","modified":"1551855201"},{"id":"1750000018414920","user_id":"1030000000091606","box_ad_id":"0","started":"1551974400","ended":"1552579200","cycles":"1","status":"0","banner":"\/418\/237\/418237919-5c7ff7806711b","link":"https:\/\/fapiao.easyapi.com\/","title":"EasyAPI\u53d1\u7968\u7ba1\u7406\uff0c\u8ba9\u60a8\u7684\u4ea7\u54c1\u7f51\u7ad9\u3001\u7535\u5546\u5e73\u53f0\u7acb\u652f\u6301\u5f00\u5177\u7535\u5b50\u53d1\u7968\u529f\u80fd","area_info":{"area":"E7:G7","height":"17","width":"51","left":"68","top":"102","pos":{"rowTop":7,"rowBottom":7,"columnLeft":5,"columnRight":7},"size":3},"created":"1551890191","modified":"1551890424"},{"id":"1750000018441330","user_id":"1030000003006163","box_ad_id":"0","started":"1552147200","ended":"1552752000","cycles":"1","status":"0","banner":"\/144\/773\/1447735758-5c85103d1ef5b","link":"https:\/\/www.ngrok.cc","title":"Sunny-Ngrok\u5185\u7f51\u7a7f\u900f\u672c\u5730\u8c03\u8bd5\u5de5\u5177\uff0c\u5fae\u4fe1\u652f\u4ed8\u5b9d\u5f02\u6b65\u56de\u8c03\u8c03\u8bd5","area_info":{"area":"N3:O4","height":"34","width":"34","left":"221","top":"34","pos":{"rowTop":3,"rowBottom":4,"columnLeft":14,"columnRight":15},"size":4},"created":"1552070785","modified":"1552071197"},{"id":"1750000018445266","user_id":"1030000008335559","box_ad_id":"0","started":"1552147200","ended":"1552752000","cycles":"1","status":"0","banner":"\/395\/937\/3959370183-5c838d0869074","link":"https:\/\/hiapp.net\/fromsegmentfault","title":"iOS\u4f01\u4e1a\u8bc1\u4e66\u7b7e\u540d 150\u5143\u6bcf\u6708 \u514d\u8d39\u91cd\u7b7e\u548c\u66f4\u65b0","area_info":{"area":"A8:C8","height":"17","width":"51","left":"0","top":"119","pos":{"rowTop":8,"rowBottom":8,"columnLeft":1,"columnRight":3},"size":3},"created":"1552124920","modified":"1552125217"},{"id":"1750000018473522","user_id":"1030000005963844","box_ad_id":"0","started":"1552406400","ended":"1553011200","cycles":"1","status":"0","banner":"\/259\/149\/2591491164-5c874aff82360","link":"http:\/\/www.h5ds.com\/","title":"\u624b\u673aH5\u9875\u9762\u81ea\u52a8\u751f\u6210\u5de5\u5177\uff0c\u53ef\u5bfc\u51faHTML\u4ee3\u7801","area_info":{"area":"A7:C7","height":"17","width":"51","left":"0","top":"102","pos":{"rowTop":7,"rowBottom":7,"columnLeft":1,"columnRight":3},"size":3},"created":"1552370269","modified":"1552370504"}].forEach(function(item) {
    var html = '<area shape="rect" ' +
        'target="_blank" ' +
        'onmouseover="SFGridAd.d(this)" ' +
        'onmouseout="SFGridAd.e(this)" ' +
        'onclick="SFGridAd.c(' + item.id + ')" ' +
        'coords="' + item.area_info.left + ',' + item.area_info.top + ',' + ((+item.area_info.left)+(+item.area_info.width)) + ',' + ((+item.area_info.top)+(+item.area_info.height)) + '" ' +
        'href="' + item.link + '" ' +
        'stitle="' + item.title + '" />'

    areaArr.push(html)
})

document.getElementById('gridsMap').innerHTML = areaArr.join('')

document.getElementById('gridsMap').onmousemove = function(e) {
    var pos = getMousePos(e)

    document.getElementById("gridMapHoverBox").style.left = pos.x + 20 + 'px'
    document.getElementById("gridMapHoverBox").style.top = pos.y + 20 + 'px'

    document.getElementById("gridMapHoverBox").innerHTML = sTitle
}

// 增加 view 统计
setTimeout(function() {
    isShow = document.querySelector('img[src^="https://static.segmentfault.com/sponsor"]').clientHeight > 0
    if (isShow) ajax({url: viewApi, method: 'GET'})
}, 0)

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
