const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    console.log('Client connected!');

    // Handle data from the client
    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        socket.write(`Echo: ${data}`); // Echo data back to client
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

// Listen on port 8080
server.listen(8080, () => {
    console.log('TCP server running on port 8080');
});
