/*var button=document.getElementById('counter');

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
    
    
   
};*/ 

//submit username/password to login


var submit = document.getElementById('submit_btn');
submit.onclick=function()
{
 //  alert('submit button clicked');
      var request = new XMLHttpRequest();
      
      
    request.onreadystatechange=function()
    {
         alert('state changed');
      if(request.readyState === XMLHttpRequest.DONE)
      {
         
          if(request.status === 200)
          {
              
              console.log("user logged in");
              alert("logeed in sucessfully");
          } else if(request.status === 403){
              alert("username/pass wrong");
          }
          else if(request.status === 500){
              alert("Something went wrong with the server");
          }
      }
    };
    
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     console.log(username);
     console.log(password);
    request.open('POST','http://nileshrathi2011.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stingify({username: username , password: password}));
  
   
};