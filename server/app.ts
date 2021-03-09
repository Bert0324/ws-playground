import { Server } from 'ws';

new Server({ port: 8080 }).on('connection', socket => {
    socket.on('message', msg => {
        console.log(msg);
        socket.send('124');
    });
}).on('error', e => {
    console.log('error', e);
});