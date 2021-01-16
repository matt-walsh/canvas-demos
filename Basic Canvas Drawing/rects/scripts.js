(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=1000;
        canvas.height=1000;

        let context = canvas.getContext("2d");
        if(context){
            //Stroked Rect
            context.strokeStyle = "blue";
            context.lineWidth=5;
            context.strokeRect(25,25,100,125);

            //Filled Rect
            context.fillStyle="green";
            context.fillRect(175,25,100,125);

            //Stroked and Filled Rect
            context.strokeStyle = "red";
            context.lineWidth=5;
            context.fillStyle="yellow";

            context.fillRect(325,25,100,125);
            context.strokeRect(325,25,100,125);
            
            //Clear Rect
            context.clearRect(15,75,450,50);
        }
    }
})();