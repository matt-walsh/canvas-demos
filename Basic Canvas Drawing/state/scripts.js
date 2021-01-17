(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=1000;
        canvas.height=1000;

        let context = canvas.getContext("2d");
        if(context){
            context.strokeStyle = "red";
            context.fillStyle = "yellow";
            context.lineWidth = 10;

            context.fillRect(25,25,100,125);
            context.strokeRect(25,25,100,125);

            //Save the state
            context.save();

            context.strokeStyle = "green";
            context.fillStyle = "blue";
            context.lineWidth = 5;
            context.fillRect(175,25,100,125);
            context.strokeRect(175,25,100,125);

            //restore the state
            context.restore();

            context.fillRect(325,25,100,125);
            context.strokeRect(325,25,100,125);

        }
    }
})();