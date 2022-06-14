/*
helpfull ressources:
https://socket.io/get-started/
https://www.w3schools.com/js/js_htmldom_html.
https://stackoverflow.com/questions/32674391/io-emit-vs-socket-
https://socket.io/docs/v4/listening-to-events/#catch-all-
https://www.tutorialspoint.com/socket.io/socket.io_event_handling.htm
https://socket.io/docs/v3/listening-to-events/
https://socket.io/docs/v3/listening-to-events/
https://stackoverflow.com/questions/17287330/socket-io-handling-disconnect-event
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
https://stackoverflow.com/questions/20632401/how-to-send-two-variables-in-one-message-using-socket-io
https://medium.com/weekly-webtips/start-using-socket-io-in-4-minutes-4342a03126
file:///C:/Users/Dave/Downloads/2021-2022_exercice_websocket.pdf

Express est une instance de serveur qui gère le routage
Socket.io gére tout ce qui est connexion entre le serveur et les clients-->plus esoin de requêtes et réponses

*/
/* { Socket } = require('engine.io');*/
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log(`user: ${socket.id} connected`);

    /*listen and send to all clients humidity data*/
    socket.on('temperature', t_data => {
      console.log('temperature: ' + t_data);
      io.emit('temperature', t_data);
    });

    /*listen and send to all clients humidity data*/
    socket.on('humidity', h_data => {
        console.log('humidity: ' + h_data);
        io.emit('humidity', h_data);
      });

    socket.on('disconnect', function () {
        console.log(`user: ${socket.id} letf`);
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});