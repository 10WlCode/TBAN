(function ($) {

    var cmdMarkdownUrl = '/mdeditor/';

    var converter1 = Markdown.getSanitizingConverter();

    // tell the converter to use Markdown Extra for tables, fenced_code_gfm, def_list
    Markdown.Extra.init(converter1, {extensions: ["tables", "fenced_code_gfm", "def_list"], highlighter: "prettify"});

    // To handle LaTeX expressions, to avoid the expression fail to work because of markdown syntax. inspired by stackeditor
    // This will handle $$LaTeX expression$$ only, so that $LaTeX expression$ could fail to handle either.

    var options = {
        strings: Markdown.local.zh
    };

    var editor1 = new Markdown.Editor(converter1, null, options);

    editor1.hooks.chain("onPreviewRefresh", function () {

        $('.prettyprint').each(function(){
            $(this).addClass('linenums');
        });
        prettyPrint(); // print code syntax for code snippet if there is.

        if ($('body').hasClass('theme-white')) {
            $('table').each(function() {
                $(this).addClass('table table-striped-white table-bordered');
            });
        } else {
            $('table').each(function() {
                $(this).addClass('table table-striped-black table-bordered');
            });
        }
    });

    // Make preview if it's inactive in 500ms to reduce the calls in onPreviewRefresh chains above and cpu cost.
    documentContent = undefined;
    var previewWrapper;
    previewWrapper = function(makePreview) {
        var debouncedMakePreview = debounce(makePreview, 500);
        return function() {
            if(documentContent === undefined) {
                makePreview();
                documentContent = '';
            } else {
                debouncedMakePreview();
            }
        };
    };

    function debounce(func, wait, immediate) {
        var timeout, result;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };
    $(document).ready(function() {
        $(".markdown-doc").each(function(i){
            $(this).attr("id","markdown-doc-"+i).hide().after($("<div id='markdown-preview-"+i+"'>"));
            editor1.idPostfix = '-'+i;
            editor1.run(previewWrapper);
        });
    });
})(jQuery);
