function Limit(id){
    Drag.apply(this,[id])
}
for(var func in Drag.prototype){
    Limit.prototype[func] = Drag.prototype[func]
}

Limit.prototype.Mousemove = function(ev){
    var e = ev || window.event
    this.offsetleft = e.clientX - this.offsetX
    this.offsettop = e.clientY - this.offsetY
    if(this.offsetleft<=0){
        this.offsetleft = 0
    }else if(this.offsetleft>=this.get_client_width_height().windowWidth-this.box.offsetWidth){
        this.offsetleft = this.get_client_width_height().windowWidth-this.box.offsetWidth;
    }
    if(this.offsettop<=0){
        this.offsettop = 0
    }else if(this.offsettop>=this.get_client_width_height().windowHeight-this.box.offsetHeight){
        this.offsettop = get_client_width_height().windowHeight-this.box.offsetHeight;
    }

    this.box.style.left = this.offsetleft + "px";
    this.box.style.top = this.offsettop + "px";
}

Limit.prototype.get_client_width_height=function(){
    //输出当前窗口的宽
    var client ={ 
        windowWidth:document.documentElement.clientWidth || document.body.clientWidth,
        windowHeight:document.documentElement.clientHeight || document.body.clientHeight
    }
    return client
}