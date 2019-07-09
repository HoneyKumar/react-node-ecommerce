var express = require('express');
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/*http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);

 console.log('Server running at http://127.0.0.1:8081/');*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'ecommerce',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});


app.get('/',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    res.end('Hello World\n');
});
app.post('/register/user', function (req, res) {
    

    let user = req.body.user;
    
    if (!user) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }
    else{
       
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let created_date = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds; 
        bcrypt.hash(user.password, saltRounds, function (err,   hash){
            var sql = "INSERT into users (role,email,password,created_date) VALUES('2','"+user.email+"','"+hash+"','"+created_date+"')";
            connection.query(sql,function(err,result){
            
                if(err)
                    return res.status(404).send({ error:true, message: err });
                else
                    return res.status(201).send({ error:false, message: 'User Registerd Sucessfully' });
    
            });
        })
        
        
        
    }
  
    /*connection.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });*/
});

app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});

module.exports = app;