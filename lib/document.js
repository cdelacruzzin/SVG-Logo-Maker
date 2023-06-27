

function createDoc(title, txtColour, shape, shapeColour) {

var svg;

  //the circle svg
  const circle = `<svg xmlns="http://www.w3.org/2000/svg" height="400" width="400">
  <circle cx="50%" cy="50%" r="100" style="fill:${shapeColour}" stroke="black" stroke-width="3"/>
  <text x="50%" y="50%" fill="${txtColour}" text-anchor="middle" dy=".3em" font-size="4rem">${title}</text>
</svg>`;

//the triangle svg
const triangle = `<svg xmlns="http://www.w3.org/2000/svg" height="400" width="400">
  <polygon points="150,0 250,200 50,200" style="fill:${shapeColour};" />
  <text x="150" y="150" fill="${txtColour}" text-anchor="middle" dy=".3em" font-size='4rem'>${title}</text>
</svg>`;

//the square svg
const square = `<svg xmlns="http://www.w3.org/2000/svg" height="400" width="400">
  <rect x="50" y="100" width="300" height="200" style="fill: ${shapeColour}" />
  <text x="200" y="200" fill="${txtColour}" text-anchor="middle" dy=".3em" font-size='4rem'>${title}</text>
</svg>`;


//checks which 'shape' was passed in the function, and assigns the variable with the same string to the svg
switch (shape) {
  case 'square': svg = square;
  break;
  case 'triangle': svg = triangle;
  break;
  case 'circle': svg = circle;
}


    const doc = `${svg}`
  ;

  return doc;
}

module.exports = {createDoc}