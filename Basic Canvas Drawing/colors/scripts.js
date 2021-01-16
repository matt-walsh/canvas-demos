(()=>{
    let canvas = document.querySelector("#canvas");
    
    if(canvas && canvas.getContext){
        //Set Width and Height of Canvas
        canvas.width=150;
        canvas.height=150;

        let context = canvas.getContext("2d");
        if(context){
            context.fillStyle = "green";
            context.fillRect(20,20,100,100);

            context.strokeStyle = "rgba(0,0,255,1)";
            context.lineWidth = 5;

            context.strokeRect(20,20,100,100);
        }
    }
})();