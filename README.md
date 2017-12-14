# photoWall-js
JS 实现简易的 2D 照片墙效果

##函数
照片墙的实现由"分散"+"聚拢"实现，这里需要由 1 个状态变量来控制 2 个事件函数，绑定在每一个小的 div 中：
    
    oDiv.onclick = function (ev2) { //点击事件
    
        console.time("click");
    
        let back = this.style.backgroundImage;//对应背景图
        flag ? showBig(back) : showSml();
        flag = !flag;
    
        console.timeEnd("click");
        
    };
    
    


