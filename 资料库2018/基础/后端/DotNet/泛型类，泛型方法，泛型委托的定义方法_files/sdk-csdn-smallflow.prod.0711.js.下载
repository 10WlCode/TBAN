(function(window,document/*,undefined*/){
  function randomStr(len){
    var sb="";var dict="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<len;++i)sb+=dict.charAt(Math.random()*dict.length|0);return sb;
  }

  function hrTime(x){
    var date=new Date(x*1000),it;
    var MM=(it=date.getMonth()+1)<10?'0'+it:it;
    var dd=(it=date.getDay())<10?'0'+it:it;
    var HH=(it=date.getHours())<10?'0'+it:it;
    var mm=(it=date.getMinutes())<10?'0'+it:it;
    var ss=(it=date.getSeconds())<10?'0'+it:it;
    return date.getFullYear()+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
  }

  function newXHR(stack){
    var xhr=new XMLHttpRequest();if(!window.TINGYUN||!TINGYUN.createEvent)return xhr;
    var event=TINGYUN.createEvent({name:stack.join('_'),key:"b3d532c8-f6e2-4978-8b7f-31e7255c46e9"});
    xhr.addEventListener("error",function(){event.fail();});
    xhr.addEventListener("load",function(){event.end();});
    return xhr;
  }

  function action(action,sceneID,itemPfx,itemID,context){
    var url=host+"/action/api/log?requestID="+requestID+"&clientToken="+clientToken,ref={
      "requestID":requestID,"actionTime":Date.now(),"action":action,"sceneId":sceneID,
      "userId":userID,"itemId":itemID,"context":context,"itemSetId":""+itemPfx,
    };var xhr=newXHR(["p4sdk","log",sceneID,itemPfx]);
    xhr.open("POST",url);xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify({"date":hrTime(ref.actionTime/1000),"actions":[ref]}));
  }

  /**
   * 左图右文情况的渲染
   * 因为 .recommend-box .recommend-item-box 下面padding设置会导致左图右文错乱，这里重置了padding
   */
  function renderLeftImgRightTxt($view, item) {
    $view.style.padding="18px";
    $view.innerHTML="<img src='' class='p4pfx_img'><h4 class='p4pfx_title'></h4><div class='p4pfx_abs'></div><div class='p4pfx_extra'></div>";
    var ex=[];if(item["category_id"])ex.push(item["category_id"]);if(item["publisher_id"])ex.push(item["publisher_id"]);ex=ex.join(" | ");
    var eTitle;(eTitle=$view.querySelector(".p4pfx_title")).innerText=item.title;eTitle.style.display="inline-block";
    eTitle.style.fontSize="20px";eTitle.style.height="30px";eTitle.style.overflow="hidden"; // FIXME crappy code
    var eAbs;(eAbs=$view.querySelector(".p4pfx_abs")).innerText=item.content;eAbs.style.display="inline-block";
    eAbs.style.height="66px";eAbs.style.overflow="hidden";eAbs.style.color="#888";
    var eExtra;(eExtra=$view.querySelector(".p4pfx_extra")).innerText=ex;eExtra.style.display="inline-block";
    var eImg;(eImg=$view.querySelector(".p4pfx_img")).src=item["cover_url"];eImg.style.float="left";
    eImg.style.width="231px";eImg.style.height="130px";eImg.style.marginRight="18px";
    var click=document.createElement("a");click.innerText="马上了解 >>";eExtra.appendChild(click);
    click.style.color="#4093c6";click.style.fontWeight="bold";click.style.float="right";

    // 布局响应规则 TODO 考虑改成CSS吧。。
    setTimeout(resize);
    window.addEventListener("resize",resize);
    function resize() {
      eTitle.style.width=eAbs.style.width=eExtra.style.width=($view.clientWidth-60-eImg.offsetWidth)+"px";
    }
  }

  /* 图片尺寸 400 * 269 */
  function renderSmallLeftImgRightTxt($view, item) {
    $view.innerHTML = '<newsfeed class="newsfeed" style="display:block;margin:0;padding:0;border:none;height:90px;overflow-y:hidden;overflow-x:hidden;position:relative;text-align:left;"><info-div style="zoom:1"><info-div class="singleImage clk"><info-div class="wrap visited"><info-div class="singleImage-img singleImage-img-left"><info-div class="img"><info-div class="ads-tag"></info-div></info-div></info-div><info-div class="singleImage-body singleImage-body-left"><info-div class="singleImage-title"></info-div><info-div class="singleImage-desc"></info-div></info-div></info-div><info-div style="clear:both;"></info-div></info-div></info-div></newsfeed>';
    var $img = $view.querySelector('.img');
    $img.style.backgroundImage = 'url(' + item.cover_url + ')';
    $img.style.width = '120px';
    $img.style.height = '90px';
    $img.style.borderRadius = '0';
    $img.style.position = 'relative';
    $img.style.display = 'block';
    $img.style.float = 'left';

    var $title = $view.querySelector('.singleImage-title');
    $title.innerText = item.title;
    $title.style.fontSize = '20px';
    $title.style.fontWeight = 'Microsoft Yahei';
    $title.style.fontWeight = 'bold';
    $title.style.color = '#333';
    $title.style.padding = '0 0 10px 16px';
    $title.style.display = 'block';
    $title.style.overflow = 'hidden';
    $title.style.whiteSpace = 'nowrap';
    $title.textOverflow = 'ellipsis';

    var $desc = $view.querySelector('.singleImage-desc');
    $desc.innerText = item.content;
    $desc.style.fontSize = '14px';
    $desc.style.fontFamily = 'Microsoft Yahei';
    $desc.style.color = '#6b6b6b';
    $desc.style.display = 'block';
    $desc.style.padding = '0px 0px 0px 16px';
    $desc.style.overflow = 'hidden';
    $desc.style.whiteSpace = 'pre-wrap';
  }

  if(window["p4sdk_singleton_main"])return;window["p4sdk_singleton_main"]=true;

  var host="https://nbrecsys.4paradigm.com";var clientToken="1f9d3d10b0ab404e86c2e61a935d3888";
  var k="paradigmLocalStorageUserIdKey";var userID=localStorage[k]||(localStorage[k]=randomStr(10));
  var requestID=randomStr(8);var seedItemID=(location.href.match(/\/article\/details\/(\d+)/)||[])[1];
  var req={itemID:seedItemID,uuid_tt_dd:(document.cookie.match(/\buuid_tt_dd=([^;]+)/)||[])[1]};
  var url=host+"/api/v0/recom/recall?requestID="+requestID+"&userID="+userID+"&sceneID=";

  action("detailPageShow",34,42,seedItemID);var dedup={};

  // T3位推荐的渲染
  if(window["p4sdk_enable_recommendBox"])(function(){
    var xhr=newXHR(["p4sdk","recall",34]);xhr.open("POST",url+34);xhr.addEventListener("load",function(){
      var raw=xhr.responseText;var json=JSON.parse(raw);var item=json[0];if(!item)throw raw;
      if(dedup[item["item_id"]])item=json[1];if(!item)throw raw;dedup[item["item_id"]]=1;
      var timer=setInterval(function renderInit(){
        if(!document.querySelectorAll("div.recommend-item-box")[1])return;clearInterval(timer);
        // 渲染广告
        var div = document.createElement("div");
        div.className="recommend-item-box";
        div.style.cursor="pointer";
        renderSmallLeftImgRightTxt(div, item);

        // 暂时注释掉改排版类型了，现在的排版类型修改为左图右文
        // div.innerHTML="<img src='' class='p4pfx_img'><h4 class='p4pfx_title text-truncate'></h4><p class='content'><a class='p4pfx_abs'></a></p><div class='p4pfx_extra info-box'></div>";
        // var ex=[];
        // if(item["category_id"])ex.push(item["category_id"]);
        // if(item["publisher_id"])ex.push(item["publisher_id"]);ex=ex.join(" | ");
        // var eTitle;(eTitle=div.querySelector(".p4pfx_title")).innerText=item.title;
        // eTitle.style.display="inline-block";
        // var eAbs;(eAbs=div.querySelector(".p4pfx_abs"))/*.innerText=item.content*/;
        // eAbs.style.display="inline-block";
        // var eExtra;(eExtra=div.querySelector(".p4pfx_extra")).innerText=ex;
        // eExtra.style.display="inline-block";
        // var eImg;(eImg=div.querySelector(".p4pfx_img")).src=item["cover_url"];
        // eImg.style.float="right";
        // eImg.style.width="124px";
        // eImg.style.height="94px";
        // 这个排版模式下的适应规则
        // setTimeout(resize);window.addEventListener("resize",resize);function resize(){
        //   eTitle.style.width=(div.clientWidth-60-eImg.offsetWidth)+"px";
        // }

        // 只有对用户可见的时候才上报
        setTimeout(scroll);
        window.addEventListener("scroll",scroll);
        function scroll(){
          var rect=div.getBoundingClientRect();var x=(rect.left+rect.right)/2,y=(rect.top+rect.bottom)/2;
          if(x>=0&&x<=document.documentElement.clientWidth&&y>=0&&y<=document.documentElement.clientHeight){
            action("show",34,39,item["item_id"],item["context"]);window.removeEventListener("scroll",scroll);
          }
        }

        // ...
        function reinsert() {
          // 如果我们已经在T3位了就不要再折腾了
          if(document.querySelectorAll("div.recommend-item-box")[2] === div) return;
          document.querySelectorAll("div.recommend-item-box")[1].insertAdjacentElement("afterend",div);
        }
        reinsert();
        setInterval(reinsert,180);

        // 点击上报
        div.addEventListener("click",function(){
          action("detailPageShow",34,39,item["item_id"],item["context"]);
          var sep=item.url.indexOf('?')<0?'?':'&'; // TODO add before hash(#)
          window.open(item.url+sep+"utm_source=blogre1","_blank");
        });
      });
    });xhr.send(JSON.stringify(req));
  })();

  // T0位推荐的渲染
  if(window["p4sdk_enable_courseBox"])(function(){
    var xhr=newXHR(["p4sdk","recall",420]);xhr.open("POST",url+420);xhr.addEventListener("load",function(){
      var raw=xhr.responseText;var json=JSON.parse(raw);var item=json[0];if(!item)throw raw;
      if(dedup[item["item_id"]])item=json[1];
      if(!item)throw raw;dedup[item["item_id"]]=1;
      var div=document.querySelector("div.p4course_target");
      div.style.cursor="pointer";
      div.style.marginTop="8px";
      div.style.background="#fff";
      div.style.boxShadow="0 2px 4px 0 rgba(0,0,0,0.05)"; // div.edu-promotion compat

      var isLayoutBigImg = item.cover_url_size && item.cover_url_size.length > 0;
      if(isLayoutBigImg) {
        // 大图片时的处理
        div.innerHTML = "<img class='recomm-big-img'>";
        var img = div.querySelector(".recomm-big-img");
        img.src = item.cover_url;
        img.style.width = "100%";
      } else {
        // 左图右文情况的处理
        renderLeftImgRightTxt(div, item);
      }

      // 只有推荐位对用户可见时才对用户课件
      setTimeout(scroll);
      window.addEventListener("scroll",scroll);
      function scroll(){
        var rect=div.getBoundingClientRect();var x=(rect.left+rect.right)/2,y=(rect.top+rect.bottom)/2;
        if(x>=0&&x<=document.documentElement.clientWidth&&y>=0&&y<=document.documentElement.clientHeight){
          action("show",420,39,item["item_id"],item["context"]);
          window.removeEventListener("scroll",scroll);
        }
      }

      // 点击上报
      div.addEventListener("click",function(){
        action("detailPageShow",420,39,item["item_id"],item["context"]);
        var sep=item.url.indexOf('?')<0?'?':'&'; // TODO add before hash(#)
        window.open(item.url+sep+"utm_source=blogt0","_blank");
      });
    });xhr.send(JSON.stringify(req));
  })();
})(window,document);
