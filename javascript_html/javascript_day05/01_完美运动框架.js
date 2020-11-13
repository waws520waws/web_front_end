function startMove(node,cssobj,complete){
    clearInterval(node.timer);
    node.timer = setInterval(function(){
        var isEnd = true;
        for(var attr in cssobj){
            var cur = null;
            var target = cssobj[attr]
            if(attr == "opacity"){
                cur = parseFloat(getStyle(node,attr)) * 100;
            }else{
                cur = parseInt(getStyle(node,attr));
            }
            var speed = (target-cur)/8;
            speed = speed > 0?Math.ceil(speed):Math.floor(speed);
            

            if(attr == "opacity"){
                cur += speed;
                node.style[attr] = cur/100;
                node.style.filter = `alpha(opacity=${cur})`;
            }else{
                //这个地方注意下node.style[attr] 不能写成node.style.attr  因为attr = "width"
                node.style[attr] = cur + speed + "px";
            }

            if(cur != target){
                isEnd = false;
            }
        }
        if(isEnd){
            clearInterval(node.timer);
            if(complete){
                complete.call(node);
            };
        }
    },30) 
}

function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle(cssStyle) : getComputedStyle(node)[cssStyle]
}