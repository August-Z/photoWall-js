window.onload = function (ev) {
    console.time('init');
    let arrImg = [],
        flag = true,//标识符
        oWrap = document.getElementsByClassName('wrap')[0],
        wrap_width = oWrap.clientWidth,     //980
        wrap_height = oWrap.clientHeight;   //500
    const ITEM_WIDTH = wrap_width / 5,      //196
        ITEM_HEIGHT = wrap_height / 5;      //100

    let pic = init();
    showSml();
    console.timeEnd('init');

    //初始化
    function init() {
        for (let i = 0; i < 25; i++) {
            let oDiv = document.createElement('DIV');//内层
            oDiv.className = "pic";
            oDiv.onclick = function (ev2) { //点击事件
                console.time("click");
                let back = this.style.backgroundImage;//对应背景图
                flag ? showBig(back) : showSml();
                flag = !flag;
                console.timeEnd("click");
            };

            let oDivWrapper = document.createElement('DIV');//外层
            oDivWrapper.style.left = i % 5 * ITEM_WIDTH + "px";
            oDivWrapper.style.top = Math.floor(i / 5) * ITEM_HEIGHT + "px";

            oDivWrapper.appendChild(oDiv);//传入
            oWrap.appendChild(oDivWrapper);
        }
        return document.getElementsByClassName('pic');
    }

    //分散
    function showSml() {
        let index;
        for (let i = 0; i < 25; i++) {
            arrImg.push(i);
        }
        for (let i = 0, len = pic.length; i < len; i++) {
            index_code = arrImg.splice(Math.floor(Math.random() * arrImg.length), 1);

            let _this = pic[i];
            _this.style.backgroundImage = `url(./images/${index_code}.jpg`;
            _this.style.backgroundSize = "196px 100px";
            _this.style.transform = "scale(0.95,0.9)";

            let mathSize = Math.random() * 40 - 20;
            _this.parentNode.style.transform = "scale(0.7) rotate(" + mathSize + "deg)";
            oWrap.style.transform = "scale(1.4)";
        }
    }

    //聚拢
    function showBig(URL) {
        for (let i = 0, len = pic.length; i < len; i++) {
            const X = i % 5 * ITEM_WIDTH,
                Y = Math.floor(i / 5) * ITEM_HEIGHT;

            let _this = pic[i];
            _this.style.backgroundImage = URL;
            _this.style.backgroundPositionX = (-1) * X + "px";
            _this.style.backgroundPositionY = (-1) * Y + "px";
            _this.style.backgroundSize = "auto";
            _this.style.transform = "scale(1)";

            _this.parentNode.style.transform = "scale(1) rotate(0)";
            oWrap.style.transform = "scale(0.8)";
        }
    }

};