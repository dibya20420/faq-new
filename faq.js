var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for(i=0;i<len;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+ 'px';
        }
    })
}

document.getElementsByClassName("accordion").addEventListener('click',change);

function change(){
    let img = document.getElementsByClassName('sign');
    img.src = "./images/icons8-minus-sign-24";
}