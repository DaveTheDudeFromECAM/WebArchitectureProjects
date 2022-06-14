// Import express
let express = require('express');

const bodyParser = require('body-parser');

// Initialize the app
let app = express();
app.use(bodyParser.urlencoded({extended: true}));

//mention public directory for css file
app.use(express.static(__dirname + '/public'));

// Send message for default URL
app.get('/', (request, response) => response.send('Hello World !'));
// Setup server port
let port = 3000;

// Launch app to listen to specified port
app.listen(port, function () {
console.log("Server running on port"  + port);
});

//EXO CODE
let tasks_list = ["Faire les course", "nourrir le chat"];

// Set route using url
app.get('/todo', (request, response) => {
    response.render('todo.ejs', {tasks : tasks_list});
    });

// Delete task
app.get('/del/:nb', (request, response) => {
    tasks_list.splice(request.params.nb, 1)
        response.render('todo.ejs', {tasks : tasks_list});
    });

// Add tasks
app.post('/add', (request, response) => {
    let item = request.body.new_task;
    tasks_list.push(item);
    response.render('todo.ejs', {tasks : tasks_list});
  });