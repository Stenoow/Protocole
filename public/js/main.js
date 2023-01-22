import Protocol from "./Protocol.js";

const canvasHtml = document.getElementById('canvas');

let currentColorCanvas = document.createElement('canvas');
currentColorCanvas.width = 100;
currentColorCanvas.height = 100;
let main = document.getElementsByTagName('main')[0];
main.appendChild(currentColorCanvas);

let protocol = new Protocol(canvasHtml, 70, 70);

protocol.getQuadrillage();

canvasHtml.addEventListener('click', (event) => {
    protocol.setTile(event);
    protocol.setTheCurrentColor(currentColorCanvas);
});

document.getElementById('download').addEventListener('click', () => protocol.downloadImg());
document.getElementById('delete').addEventListener('click', () => protocol.deleteImg());
