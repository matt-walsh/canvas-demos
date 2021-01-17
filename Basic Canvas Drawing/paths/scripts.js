(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=1000;
        canvas.height=1000;

        let context = canvas.getContext("2d");
        if(context){
            context.strokeStyle = "blue";
            context.fillStyle = "red";
            context.lineWidth = 5;

            //Open Path
            context.beginPath();
            context.move(25,175);
            context.lineTo(50,25);
            context.lineTo(125,50);
            context.lineTo(175,175);
            context.stroke();

            //Closed Path
            context.beginPath();
            context.move(225,175);
            context.lineTo(250,25);
            context.lineTo(325,50);
            context.lineTo(375,175);
            context.closePath();
            context.stroke();           

            //Draw and Fill Unclosed Path
            context.beginPath();
            context.move(425,175);
            context.lineTo(450,25);
            context.lineTo(525,50);
            context.lineTo(575,175);
            context.fill();
            context.stroke();
        }
    }
})();