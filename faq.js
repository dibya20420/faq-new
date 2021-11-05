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
// for(let j=0;j<len;j++){
//     document.getElementsByClassName("accordion")[j].addEventListener('click',change);

// function change(){
//     let img = document.getElementsByClassName('sign')[j];
//     img.src = "./images/icons8-minus-sign-24.png";
// }
// }

