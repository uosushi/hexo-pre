// themes/<theme-name>/source/js/script.js
(window.onload = function() {
    var tabs = document.getElementsByClassName('tab');
    var pre = document.getElementsByClassName('hide')
    Array.prototype.forEach.call(tabs,function(tab) {
        tab.addEventListener("click", function(event){
            Array.prototype.forEach.call(tabs,function(item){
                if (item.classList.contains("tab-active")){
                    item.classList.remove("tab-active");
                };
            });
            event.target.classList.toggle("tab-active");
            var target_pre = document.getElementById(event.target.dataset.number);
            Array.prototype.forEach.call(pre,function(item){
                if (item.classList.contains("show")){
                    item.classList.remove("show");
                };
            });
            target_pre.classList.toggle("show");
        });
    });
})();
