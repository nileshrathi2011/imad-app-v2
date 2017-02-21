var button=document.getElementById("counter");
button.onclick=function()
{
    var span = document.getElementById("count");
    counter=count+1;
    span.innerHTML=counter.toString();
};