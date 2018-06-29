var express = require('express');
var app = express();
var server = app.listen(3000)
var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
    console.log(socket.id);
    socket.on('update', () => {
        console.log('io.emit update from app.js')
        io.emit('update')     
    });
});