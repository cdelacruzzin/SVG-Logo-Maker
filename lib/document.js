

function createDoc() {

  //the circle svg
  const circle = `<svg>
  <circle cx="50%" cy="50%" r="100" />
      <text x="50%" y="55%">${shape}</text>
</svg>`;

var svg=``;

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