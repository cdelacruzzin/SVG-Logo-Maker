

function createDoc() {

  //the circle svg
  const circle = `<svg>
  <circle cx="50%" cy="50%" r="100" style="fill:${colour};/>
      <text x="50%" y="55%" fill=${txtColour}>${shape}</text>
</svg>`;

//the triangle svg
const triangle = `<svg>
<polygon points="150,0 250,200 50,200" style="fill:${colour};" />
    <text x="50%" y="70%" fill=${txtColour}>${shape}</text>
</svg>`

//the square svg
const square = `<rect width="300" height="200" style="fill: ${colour}" />
<text x="47%" y="54%" fill=${txtColour}>${shape}</text>
</svg>`

var svg;
    const doc = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
    ${svg}
</body>
  </html>
  `;
}

module.exports = {createDoc}