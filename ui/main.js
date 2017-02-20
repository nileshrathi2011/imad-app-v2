console.log('Loaded!');
//change the text of HTML

var element=document.getElementById('main-text');
element.innerHTML='new Value';
// move the image

var img=document.getElementById('madi');

img.onclick=function()
{
  img.style.marginLeft='100px';  
};