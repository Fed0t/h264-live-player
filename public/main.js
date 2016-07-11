var WSAvcPlayer = require('../vendor');


var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
// Create h264 player

// var uri = "ws://" + document.location.host;
// var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
// wsavc.connect(uri);

var socketIOURL = location.protocol + '//' + document.domain + ':' + location.port + '/h264';
var client = io.connect(socketIOURL, {path: '/'});
var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
wsavc.connect(client);


//for button callbacks
window.wsavc = wsavc;
