const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Start drawing
canvas.addEventListener('mousedown', (event) => {
  console.log("mousedown")
    isDrawing = true;
    lastX = event.offsetX; // Get the x position relative to the canvas
    lastY = event.offsetY; // Get the y position relative to the canvas
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
  console.log("mouseup")
    isDrawing = false;
    ctx.beginPath(); // Reset the current path
});

// Draw on the canvas
canvas.addEventListener('mousemove', (event) => {
  console.log("mousemove")
    if (!isDrawing) return; // Exit if not drawing
    ctx.strokeStyle = 'black'; // Set line color
    ctx.lineWidth = 2; // Set line width
    ctx.beginPath(); // Start a new path
    ctx.moveTo(lastX, lastY); // Move to the last position
    ctx.lineTo(event.offsetX, event.offsetY); // Draw a line to the current position
    ctx.stroke(); // Apply the stroke
    lastX = event.offsetX; // Update the last position
    lastY = event.offsetY; // Update the last position
});

// Clear the canvas (optional)
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Clear canvas function
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
}

// Add event listener to the clear button
document.getElementById('clearButton').addEventListener('click', clearCanvas);