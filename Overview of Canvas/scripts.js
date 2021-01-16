(()=>{
    let canvas = document.querySelector("#canvas");
    

    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=150;
        canvas.height=150;

        let context = canvas.getContext("2d");
        if(context){
            context.fillStyle = "cornflowerblue";
            context.strokeStyle = "black";
            context.lineWidth = 1;

            context.fillRect(0,0,context.canvas.width,context.canvas.height);
            context.strokeRect(0,0,context.canvas.width,context.canvas.height);
        }
    }
})();