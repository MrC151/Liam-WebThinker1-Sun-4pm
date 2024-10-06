// 
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext('2d');

    // Begin new path
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
  });