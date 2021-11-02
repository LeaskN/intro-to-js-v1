// Here I am getting a reference to the HTML <canvas> element.
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

function draw(){
    // Here, "#008000" is the hex value for 'green'
    /*  
        So what this code is doing is checking to see if the fillstyle 
        is 'green' ("#008000"), if it is we change it to blue, otherwise
        we set it to 'green'.

        Our fillRect method creates a rectangle with the given arguments:
        x-value: 10, y-value: 10, width: 150, height: 150

        Our rectangle is inheriting the fillStyle assigned to our context obj
    */
    if(ctx.fillStyle === "#008000"){
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = 'green';
    }
    ctx.fillRect(10, 10, 150, 100);
}

// Here I am logging out the context object just for reference
console.log(ctx, "<-- context obj");

/*
    Here I am using the method setInterval (that exists on our browsers 
    window interface) that tells our browser to run our draw() function 
    every 1000 miliseconds (1 second).
*/
window.setInterval(draw, 1000);