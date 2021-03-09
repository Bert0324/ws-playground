const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', e => {
    console.log('opened', e);
});

socket.addEventListener('message', e => {
    console.log('get message', e);
});