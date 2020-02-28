# hexo-pre
埋め込み風コードを表示する裏側の処理と表のJavaScriptファイルとか
## 形式(Markdown)
```markdown
{% pre "title(固有)" "タブ名1" "タブ名2" %} // RESULTタブは除く
RESULT // escapeされない
<!-- block! -->
タブ名1 // RESULTタブ以外はescapeされる
<!-- block! -->
タブ名2 // escapeされる
{% endpre %}
```
## 結果(HTML)
```html
<div class="tabs"><span class="tab tab-active" data-number="title-0">RESULT</span><span class="tab" data-number="title-1">タブ名1</span><span class="tab" data-number="title-2">タブ名2</span></div>
<preview id="title-0" class="hide show">RESULT</preview>
<pre id="title-1" class="hide">タブ名1</pre>
<pre id="title-2" class="hide">タブ名2</pre>
```
