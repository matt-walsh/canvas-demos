(()=>{
    let canvas1 = document.querySelector("#canvas1");
    let canvas2 = document.querySelector("#canvas2");
    let canvas3 = document.querySelector("#canvas3");
    let canvas4 = document.querySelector("#canvas4");
    
    //Line Styles
    if(canvas1 && canvas1.getContext){
        let context = canvas1.getContext("2d");
        if(context){
            for (let i = 0; i < 10; i++) {
                context.beginPath();
                context.lineWidth = i + 1;
                context.moveTo(25, 25 + i*15);
                context.lineTo(475, 25 + i*15);
                context.stroke();
            }
        }
    }

    //lineCap
    if(canvas2 && canvas2.getContext){
        let context = canvas2.getContext("2d");
        if(context){
            //Draw Guide lines
            context.strokeStyle = "green";
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(50,20);
            context.lineTo(50, 180);
            context.moveTo(450, 20);
            context.lineTo(450, 180);
            context.stroke();

            //Draw lines to demo Linecap
            context.lineWidth = 25;
            context.strokeStyle = "black";
            context.lineCap = "butt";
            context.beginPath();
            context.moveTo(50,50);
            context.lineTo(450, 50);
            context.stroke();

            context.lineCap = "round";
            context.beginPath();
            context.moveTo(50, 100);
            context.lineTo(450, 100);
            context.stroke();

            context.lineCap = "square";
            context.beginPath();
            context.moveTo(50, 150);
            context.lineTo(450, 150);
            context.stroke();
        }
    }

    //lineJoin
    if(canvas3 && canvas3.getContext){
        let context = canvas3.getContext("2d");
        if(context){
            context.lineWidth = 15;
            context.strokeStyle = "black";

            context.lineJoin = "round";
            context.beginPath();
            context.moveTo(25, 150);
            context.lineTo(75, 50);
            context.lineTo(125, 50);
            context.stroke();

            context.lineJoin = "bevel";
            context.beginPath();
            context.moveTo(175, 150);
            context.lineTo(225, 50);
            context.lineTo(275, 50);
            context.stroke();

            context.lineJoin = "miter";
            context.beginPath();
            context.moveTo(325, 150);
            context.lineTo(375, 50);
            context.lineTo(425, 50);
            context.stroke();
        }
    }

    //lineDash
    if(canvas4 && canvas4.getContext){
        let context = canvas4.getContext("2d");
        if(context){
            context.lineWidth = 15;
            context.strokeStyle = "black";

            context.setLineDash([5,10]);
            context.beginPath();
            context.moveTo(50, 50);
            context.lineTo(450, 50);
            context.stroke();

            context.setLineDash([15,5]);
            context.beginPath();
            context.moveTo(50, 100);
            context.lineTo(450, 100);
            context.stroke();

            context.setLineDash([]);
            context.beginPath();
            context.moveTo(50, 150);
            context.lineTo(450, 150);
            context.stroke();
        }
    }
})();