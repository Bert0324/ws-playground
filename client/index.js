const socket = new WebSocket('ws://127.0.0.1:8080');

socket.addEventListener('open', e => {
    console.log('opened', e);
});

socket.addEventListener('message', e => {
    console.log('get message', e);
});