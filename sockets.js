const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const port = 3001

app.use(express.static('public'))

app.get('/api/unlock', function(req, res) {
	io.emit('glock', req.params)
	res.send();
	res.status(200)
})
app.get('/api/lock', function(req, res) {
	io.emit('bleed it', req.params)
	res.send();
	res.status(200)
})
app.get('/api/update_location', function(req, res) {
	io.emit('yuh', req.params)
	res.send();

	res.status(200)
})
app.get('/api/:food/:change', function(req, res) {
    io.emit('update', req.params)
		res.send();
    res.status(200)
})

server.listen(port);
console.log("Listening on localhost:" + port)

// when we get a new connection – `socket` represents the user that's connected
io.on('connection', function(socket) {

    socket.emit('hello', {num: 5});

    socket.on('world', function(data) {
        console.log("Successfully connected!", data)
    })

});
