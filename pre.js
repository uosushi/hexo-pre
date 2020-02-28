// /scripts/pre.js
function escapeHTML(str) {
    if (!str) return;
    return str.replace(/[<>&"'`]/g, function(match) {
        const escape = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&#x60;'
        };
        return escape[match];
    });
}
hexo.extend.tag.register("pre", function(args, content){
    var title = args[0];
    var tabs = args.slice(1);
    var content = content.split("<!-- block! -->"); // 区切り
    var html = '<div class="tabs">';
    html += '<span class="tab tab-active" data-number="'+title+'-0">RESULT</span>'
    for (var index=1;index<tabs.length+1;index++){
        html += '<span class="tab" data-number="'+title+'-'+String(index)+'">'+tabs[index-1]+'</span>'
    };
    html += '</div><preview id="'+title+'-0" class="hide show">'+content[0]+'</preview>';
    for (var index=1;index<content.length;index++){
        html += '<pre id="'+title+'-'+String(index)+'" class="hide">'+escapeHTML(content[index])+'</pre>';
    };
    return html
},{ends: true}); // 終了タグあり
