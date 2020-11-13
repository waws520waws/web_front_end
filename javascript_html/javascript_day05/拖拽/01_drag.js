function Drag(id){
    this.box = document.getElementById(id);
    this.box.onmousedown = this.Mousedown.bind(this);
    document.onmouseup = this.Mouseup.bind(this);
}

Drag.prototype.Mousedown = function(ev){           
    //[object HTMLDivElement] 这个部分的this是div元素，所以已经不在是我们的Drag本身了，this.box.offsetLeft调用不到，报错
    
    var e = ev || window.event;
    this.offsetX = e.clientX - this.box.offsetLeft;
    this.offsetY = e.clientY - this.box.offsetTop;
    document.onmousemove =this.Mousemove.bind(this);
    
}

Drag.prototype.Mousemove = function(ev){
    var e = ev || window.event;
    this.box.style.left = e.clientX - this.offsetX + "px";
    this.box.style.top = e.clientY - this.offsetY + "px";
}

Drag.prototype.Mouseup = function(){
    document.onmousemove = null;
}