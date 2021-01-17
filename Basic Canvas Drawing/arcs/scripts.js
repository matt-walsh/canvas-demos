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

            //Quarter Arc
            context.beginPath();
            context.arc(50,150,100,0,0.5*Math.PI);
            context.stroke();
            //Half Arc (Counter-Clockwise)
            context.beginPath();
            context.arc(300,150,100,0,Math.PI,true);
            context.stroke();

            //Full Circle
            context.beginPath();
            context.arc(550,150,100,0,2*Math.PI);
            context.fill();
            context.stroke();
        }
    }
})();