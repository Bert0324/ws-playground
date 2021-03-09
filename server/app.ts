import { Server } from 'ws';

const server = new Server({ port: 8080 });

server.on('listening', () => console.log('started'));
server.on('error', e => console.log('error', e));
server.on('connection', socket => {
    
    console.log(socket.url);

    socket.on('pong', () => {
        
    });

    socket.on('message', msg => {
        console.log(msg);
        socket.send('124');
    });
})

