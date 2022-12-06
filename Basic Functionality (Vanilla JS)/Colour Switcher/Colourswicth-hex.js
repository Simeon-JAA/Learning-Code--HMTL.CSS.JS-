//defining array of colorus
const colours = ['Red', 'Yellow', 'Orange', 'Green', 'Blue', 'Pink', 'Purple', 'Cyan', 'Violet', 'Gray',];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');
let colourText = document.querySelector('#colour-text');
const title = document.getElementById('title');


btn.addEventListener('click', function(){
    //get a random number between 0 - n (legth of array)
    randomHexColour();
  })  

// Hex colour function
function randomHexColour() {
    
  let hexColour = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let rnd1 = hexColour[Math.floor(Math.random() * hexColour.length)];
  let rnd2 = hexColour[Math.floor(Math.random() * hexColour.length)];
  let rnd3 = hexColour[Math.floor(Math.random() * hexColour.length)];
  let rnd4 = hexColour[Math.floor(Math.random() * hexColour.length)];
  let rnd5 = hexColour[Math.floor(Math.random() * hexColour.length)];
  let rnd6 = hexColour[Math.floor(Math.random() * hexColour.length)];


  let rndGenHex = '#' + rnd1 + rnd2 + rnd3 + rnd4 + rnd5 + rnd6;

  document.body.style.backgroundColor = rndGenHex;

  const colourText = document.querySelector('#colour-text');

  colourText.textContent = ' ' + rndGenHex;
}
