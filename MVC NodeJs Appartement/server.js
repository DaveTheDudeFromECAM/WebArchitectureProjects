// Import express
let express = require('express');
let sessions = require('express-session');
// Initialize the app
let app = express();
app.use(express.static('public'));

//Config bodyParser to handle POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Session config + start
app.use(sessions({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}));


let todoRouter = require('./routes/todo_router');
app.use('/',todoRouter)


// Setup server port
let port = 2500;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log('Server running on port' + port);
    });