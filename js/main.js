/**
 * Created by liuyujing on 2017/5/7.
 */
window.onload = function () {

    function loadData(url) {
        return new Promise(function (res) {
            var request = new XMLHttpRequest();
            request.open("GET",url);
            request.onload = function () {
                res(request.response);
            };
            request.send();
        });
    }


    function reloadData(type) {
        var contentView = document.querySelector("#main .content");

        loadData(type+".json").then(function (result) {
            var datas = JSON.parse(result);
            var contentString = "";
            for (var i=0;i<datas.length;i++){
                contentString += "<li><div class='main-text'><h3>"+datas[i].title+"</h3><p>"+datas[i].des+"</p></div></div><time>"+datas[i].time+"</time></li>";
            }
            contentView.innerHTML = contentString;

        });

    }
    
    
    function init() {
        var type = "JavaScript";
        reloadData(type);

        var navButtons = document.querySelectorAll(".header-nav li");

        for (var i=0;i<navButtons.length;i++){
            (function (i) {

                navButtons[i].onclick = function () {
                    reloadData(this.textContent);
                }

            })(i);
        }
    }
    
    init();

};