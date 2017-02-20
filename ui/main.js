console.log('Loaded!');
//change the text of HTML

var element=document.getElementById('main-text');
element.innerHTML='new Value';
// move the image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
 marginLeft=magginLeft+10;
 img.style.marginLeft= magginLeft+ 'px';
}
img.onclick=function()
{
  var interval=setInterval(moveRight,100); 
};