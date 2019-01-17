/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(2(){1 h=9;h.O=2(){2 n(c,a){3(1 d=0;d<c.7;d++)i[c[d]]=a}2 o(c){1 a=r.B("A"),d=4;a.z=c;a.K="M/x";a.L="x";a.u=a.v=2(){6(!d&&(!q.5||q.5=="H"||q.5=="I")){d=8;e[c]=8;a:{3(1 p F e)6(e[p]==4)G a;j&&9.J(k)}a.u=a.v=w;a.y.E(a)}};r.D.C(a)}1 f=S,l=h.T(),i={},e={},j=4,k=w,b;9.N=2(c){k=c;j=8};3(b=0;b<f.7;b++){1 m=f[b].t?f[b]:f[b].P(/\\s+/),g=m.t();n(m,g)}3(b=0;b<l.7;b++)6(g=i[l[b].Q.R]){e[g]=4;o(g)}}})();',56,56,'|var|function|for|false|readyState|if|length|true|SyntaxHighlighter|||||||||||||||||this|document||pop|onload|onreadystatechange|null|javascript|parentNode|src|script|createElement|appendChild|body|removeChild|in|break|loaded|complete|highlight|type|language|text|all|autoloader|split|params|brush|arguments|findElements'.split('|'),0,{}))

//生成目录索引列表
        function GenerateContentList() {
            var jquery_h1_list = $('#content h2');
            if (jquery_h1_list.length == 0) { return; }
            if ($('#content').length == 0) { return; }

            var content = '<a name="_labelTop"></a>';
            content += '<div id="navCategory">';
            content += '<p style="font-size:18px"><b>目录</b></p>';
            // 一级目录 start
            content += '<ul class="first_class_ul">';

            for (var i = 0; i < jquery_h1_list.length; i++) {
                var go_to_top = '<div style="text-align: right"><a name="_label' + i + '">&nbsp;</a></div>';
                $(jquery_h1_list[i]).before(go_to_top);

                // 一级目录的一条
                var li_content = '<li><a href="#_label' + i + '">' + $(jquery_h1_list[i]).text() + '</a></li>';

                var nextH1Index = i + 1;
                if (nextH1Index == jquery_h1_list.length) { nextH1Index = 0; }
                var jquery_h2_list = $(jquery_h1_list[i]).nextUntil(jquery_h1_list[nextH1Index], "h3");
                // 二级目录 start
                if (jquery_h2_list.length > 0) {
                    //li_content +='<ul style="list-style-type:none; text-align: left; margin:2px 2px;">';
                    li_content += '<ul class="second_class_ul">';
                }
                for (var j = 0; j < jquery_h2_list.length; j++) {
                    var go_to_top2 = '<div style="text-align: right"><a name="_lab2_' + i + '_' + j + '">&nbsp;</a></div>';
                    $(jquery_h2_list[j]).before(go_to_top2);
                    // 二级目录的一条
                    li_content += '<li><a href="#_lab2_' + i + '_' + j + '">' + $(jquery_h2_list[j]).text() + '</a></li>';

                    var nextH2Index = j + 1;
                    var next;
                    if (nextH2Index == jquery_h2_list.length) {
                        if (i + 1 == jquery_h1_list.length) {
                            next = jquery_h1_list[0];
                        }
                        else {
                            next = jquery_h1_list[i + 1];
                        }
                    }
                    else {
                        next = jquery_h2_list[nextH2Index];
                    }
                    var jquery_h3_list = $(jquery_h2_list[j]).nextUntil(next, "h4");
                    // 三级目录 start
                    if (jquery_h3_list.length > 0) {
                        li_content += '<ul class="third_class_ul">';
                    }

                    for (var k = 0; k < jquery_h3_list.length; k++) {
                        var go_to_third_Content = '<div style="text-align: right"><a name="_label3_' + i + '_' + j + '_' + k + '">&nbsp;</a></div>';
                        $(jquery_h3_list[k]).before(go_to_third_Content);
                        // 三级目录的一条
                        li_content += '<li><a href="#_label3_' + i + '_' + j + '_' + k + '">' + $(jquery_h3_list[k]).text() + '</a></li>';
                    }

                    if (jquery_h3_list.length > 0) {
                        li_content += '</ul>';
                    }
                    li_content += '</li>';
                    // 三级目录 end
                }
                if (jquery_h2_list.length > 0) {
                    li_content += '</ul>';
                }
                li_content += '</li>';
                // 二级目录 end

                content += li_content;
            }
            // 一级目录 end
            content += '</ul>';
            content += '</div>';

            $($('#content')[0]).prepend(content);
        }
