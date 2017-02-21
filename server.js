var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles=
{
  'article-one':{
      
    title:'Article One',
    heading:'HEADINF OF TITLE ONE',
    date:'12 september',
    content:`<p>
                    this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.
                </p>
                <p>
                    this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.
                </p>
                <p>
                    this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.this is the content of article one.
                </p>`},
    'article-two':{
    title:'Article Two',
    heading:'HEADINF OF TITLE Two',
    date:'13 september',
    content:`<p>
                    this is the content of article Two.
    `},
    'article-three':{
    title:'Article Three',
    heading:'HEADINF OF TITLE Tree',
    date:'14th  september',
    content:`<p>this is the content of article Three.</p>`
    }
};

var articleOne=
{
    
};

function createTemplate (data)
{
    var title=data.title;
    var heading = data.heading;
    var date= data.date;
    var content= data.content;
    
    var HtmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
      <link href="/ui/style.css" rel="stylesheet"/> 
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div> ${date}</div>
            <div>
                ${content}
                </p>
            </div>
        </div>
    </body>
</html>`;

return HtmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)
{
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
