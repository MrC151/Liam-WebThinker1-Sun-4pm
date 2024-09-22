const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let credits = 200
let minCredits = 10
let deductCredits = 1
let addCredits = 50


function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
} 
async function main() {
  let game_used = askQuestion('Are you playing? ( Y / N )')
}
  let game_used = askQuestion('Are you playing? ( Y / N )')
  if (game_used == "Y") {
    console.log('Deducting Credits now!')
    const frames = ['/','|','\\','-'];
    let index = 0;

    function animate() {
        // Clear the console
        console.clear();

        // Log the current frame
        console.log(frames[index]);

        // Update index to the next frame
        index = (index + 1) % frames.length; // Cycle through the frames
    }

// Call animate every 200 milliseconds
setInterval(animate, 200);
    credits = credits - deductCredits
    // console.log(`Game in play, credits left: ${credits}`)
  } else if (game_used == "N") {
    console.log(`No Game Used. Credits left: ${credits}`)
  } else if (credits == 0 ) {
    console.log(`No more credits left! ${Credits_0}`)
}
const Credits_0 = `

____       _       _          ___  
|  _ \ ___ (_)_ __ | |_ ___   / _ \ 
| |_) / _ \| | '_ \| __/ __| | | | |
|  __/ (_) | | | | | |_\__ \ | |_| |
|_|   \___/|_|_| |_|\__|___/  \___/ 
                                    

`
main()

