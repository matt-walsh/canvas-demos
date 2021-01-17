(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=1000;
        canvas.height=1000;

        let context = canvas.getContext("2d");
        if(context){
            let string = "The Quick Brown Fox Jumped Over The Lazy Dog.";
            let startX = 20;
            //Font
            context.font = "25px Georgia";
            context.fillText(string, startX, 60);

            //Fill Style
            context.fillStyle = "blue";
            context.fillText(string, startX, 100);

            //Stroke and Fill
            context.font = "32px Verdana";
            context.fillStyle = "yellow";
            context.strokeStyle = "rgba(0,255,0,0.8)"
            context.fillText(string, startX, 160);
            context.strokeText(string, startX, 160);

            //Measure Text
            let textWidth = context.measureText(string);
            context.beginPath();
            context.strokeStyle = "black";
            context.moveTo(startX, 170);
            context.lineTo(startX + Math.round(textWidth.width), 170);
            context.stroke();
        }
    }
})();