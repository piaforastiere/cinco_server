const express = require('express')
const routes = require("./routes")
const path = require("path")
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-APY-KEY, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Allow", "GET,HEAD,OPTIONS,POST,PUT")
    next()
})



app.use('/api', routes())


const PORT = process.env.PORT || 8080
app.listen(process.env.PORT || 8080, function(){
    console.log('Server is running!', PORT);
});