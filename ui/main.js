var button=document.getElementById('counter');

button.onclick=function()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange=function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
              var counter= request.responseText;
               var span = document.getElementById('count');
               span.innerHTML=counter.toString();
              
          }
      }
    };
    
    request.open('GET','http://nileshrathi2011.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
   
};
var nameinput = document.getElementById('name');
var nameValue = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function()
{
    alert('dfsf');
   var names=['name1','name2','name3','name4'];
   
   var list='';
   for(var i=0;i<names.length;i++)
   {
       list+= '<li>' + names[i] + 'fdsf</li>';
   }
   var ul= document.getElementById("name_list");
   
   ul.innerHTML = list;
   
};