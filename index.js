/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/


const express = require('express');
const path = require('path');
const app = express();
const fortune = require('./library/fortune.js');



//Static middleware
app.use(express.static(__dirname +'/public'));
app.set('port', process.env.PORT || 3000);
// dynamic pages
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');

//home routs
app.get('/',function(req,res){
    /*res.type('text/plain');
    res.send('MY SITE IS ONLINE');*/
    res.render('home');
});

//ABOUT routs
app.get('/about',function(req,res){

   res.render('about',{fortune:fortune.getFortune()});

});


// custom 404 page
app.use(function(req,res){
   /* res.type('text/html');/*res.type('text/plain');
    res.status(404);
    res.send('<h1>404 -NOT FOUND</h1>');*/
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use(function(err,req,res,next){
   /* console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send(var'500 -SERVER ERROR');*/
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static('public'))

app.listen(app.get('port'),function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


