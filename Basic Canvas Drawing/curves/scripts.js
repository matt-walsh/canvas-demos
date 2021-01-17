(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=1000;
        canvas.height=1000;

        let context = canvas.getContext("2d");
        if(context){
            context.strokeStyle = "blue";
            context.lineWidth = 5;

            //Bezier
            context.beginPath();
            context.moveTo(50, 200);
            context.bezierCurveTo(50, 100, 200, 100, 200, 150);
            context.stroke();

            //Show Control Points
            context.strokeStyle = "red";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(50, 200);
            context.lineTo(50,100);
            context.lineTo(200,100);
            context.lineTo(200,150);
            context.stroke();


            //Quadratic
            context.strokeStyle = "green";
            context.lineWidth = 5;
            context.beginPath();
            context.moveTo(400, 200);
            context.quadraticCurveTo(400,100,600,150);
            context.stroke();

            //Show Control Points
            context.strokeStyle = "red";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(400, 200);
            context.lineTo(400, 100);
            context.lineTo(600, 150);
            context.stroke();
        }
    }
})();