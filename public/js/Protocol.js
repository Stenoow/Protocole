export default class Protocol{
    constructor(canvas, width = 800, height = 800) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.numberWidth = width / 10;
        this.numberHeight = height / 10;
        this.canvasHtml = canvas;
        this.json = {};
        this.currentColor = '#FFFFFF';
        this.totalTiles = 0;
        this.setSizeCanvas();
        this.getRandomColor();
    }

    setJson(){
        let jsonLocal = this.getJsonLocal();
        if(jsonLocal){
            this.json = JSON.parse(jsonLocal);
        }
        let total = 0;
        for(let i = 0; i < this.numberWidth; i++){
            if(this.json[i] === undefined)
                this.json[i] = {};

            for(let j = 0; j < this.numberHeight; j++){
                total++;
                if(this.json[i][j] === undefined)
                    this.json[i][j] = '#FFFFFF';
                else{
                    if(this.json[i][j] !== '#FFFFFF')
                        this.getColorsTiles(i, j);
                }
            }
        }
        this.totalTiles = total;
    }

    setSizeCanvas(){
        this.canvasHtml.width = this.canvasWidth;
        this.canvasHtml.height = this.canvasHeight;
    }

    getQuadrillage(){
        let numberWidth = this.numberWidth;
        let numberHeight = this.numberHeight;
        let canvasContext = this.canvasHtml.getContext('2d');
        canvasContext.beginPath();
        canvasContext.rect(0, 0, this.canvasWidth, this.canvasHeight);
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fill();
        canvasContext.closePath();
        canvasContext.fillStyle = '#000000';
        for(let i = 0; i < numberWidth; i++){
            canvasContext.beginPath();
            canvasContext.moveTo(i * this.canvasWidth / numberWidth, 0);
            canvasContext.lineTo(i * this.canvasWidth / numberWidth, this.canvasHeight);
            canvasContext.stroke();
            canvasContext.closePath();
        }
        for(let i = 0; i < numberHeight; i++){
            canvasContext.beginPath();
            canvasContext.moveTo(0, i * this.canvasHeight / numberHeight);
            canvasContext.lineTo(this.canvasWidth, i * this.canvasHeight / numberHeight);
            canvasContext.stroke();
            canvasContext.closePath();
        }
        this.setJson();
    }

    getColorsTiles(x, y){
        let canvasContext = this.canvasHtml.getContext('2d');
        canvasContext.fillStyle = this.json[x][y];
        canvasContext.beginPath();
        canvasContext.rect(x * 10, y * 10, 10, 10);
        canvasContext.fill();
        canvasContext.closePath();
    }

    setRandomColor(){
        this.currentColor = Math.floor(Math.random() * 3);
    }

    getRandomColor(){
        switch(this.currentColor){
            case 0:
                return '#FF0000';
            case 1:
                return '#00FF00';
            case 2:
            default:
                return '#0000FF';
        }
    }

    setTheCurrentColor(canvas){
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.getRandomColor();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    }

    setTile(event){
        let x = Math.floor(event.offsetX / 10);
        let y = Math.floor(event.offsetY / 10);
        if(x < 0 || x > this.numberWidth) return;
        if(y < 0 || y > this.numberHeight) return;

        this.json[x][y] = this.getRandomColor();
        this.getColorsTiles(x, y);
        this.setRandomColor();
        this.saveJsonLocal();
    }

    saveJsonLocal(){
        localStorage.setItem('json', JSON.stringify(this.json));
    }

    getJsonLocal(){
        if(localStorage.getItem('json') !== null){
            return localStorage.getItem('json');
        }
        return false;
    }

    deleteJsonLocal(){
        localStorage.removeItem('json');
        this.json = {};
    }

    deleteImg(){
        this.deleteJsonLocal();
        this.getQuadrillage();
    }

    downloadImg(){
        var link = document.createElement('a');
        link.download = 'tonTrucPasOuf.png';
        link.href = this.canvasHtml.toDataURL();
        link.click();
    }
}
