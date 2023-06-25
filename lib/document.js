

function createDoc(title, txtColour, shape, shapeColour) {

var svg;

  //the circle svg
  const circle = `<svg>
  <circle cx="50%" cy="50%" r="100" style="fill:${shapeColour}"/>
      <text x="50%" y="55%" fill="${txtColour}">${title}</text>
</svg>`;

//the triangle svg
const triangle = `<svg>
<polygon points="150,0 250,200 50,200" style="fill:${shapeColour};" />
    <text x="50%" y="70%" fill=${txtColour}>${title}</text>
</svg>`

//the square svg
const square = `<rect width="300" height="200" style="fill: ${shapeColour}" />
<text x="47%" y="54%" fill=${txtColour}>${title}</text>
</svg>`


//checks which 'shape' was passed in the function, and assigns the variable with the same string to the svg
switch (shape) {
  case 'square': svg = square;
  break;
  case 'triangle': svg = triangle;
  break;
  case 'circle': svg = circle;
}


    const doc = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title} logo page</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
    ${svg}
</body>
  </html>
  `;

  return doc;
}

module.exports = {createDoc}