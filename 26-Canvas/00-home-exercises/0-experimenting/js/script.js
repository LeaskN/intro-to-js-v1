// Here I am getting a reference to the HTML <canvas> element.
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

function draw(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
}

// Here I am logging out the context object just for reference
console.log(ctx, "<-- context obj");

draw()
// window.setInterval(draw, 1000);