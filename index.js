const express = require('express');
const app = express();
const port = 8080;
const expressLayout = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayout);

//extract style and script from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'));

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(port, function(err){
    if(err){
        
        console.log(`Error in running the server:  ${err}`);
    }

    console.log(`server is running on port: ${port}`);
});
