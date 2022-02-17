const Engineer = require("./Engineer")
const Intern = require("./Intern")
const Manager = require("./Manager")

function genreateHTML(response) {
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 id="header">My Team</h1>
        </header>
    
        <main>
            <div class="container">
              <div class="row">
              <div class="col"></div>
            ${generateManagerCards(response)}
              <div class="col"></div>
            ${generateEngineerCards(response)}
              <div class="w-100"></div>
            ${generateInternCards(response)}
              <div class="col"></div>
              <div clas="col"></div>
              </div>
            </div>
    
        </main>
    
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>    
        <script src="./script.js"></script>
    </body>
    </html>`

    return template
};

function generateManagerCards (arr) {
  let managerCards = ``
  console.log(arr)
  for(i=0; i< arr.length; i++) {
    if(arr[i].getTitle() == "Manager") {
      managerCards += `
      <div class="card" style="width: 18rem;">
      <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/glasses.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" id="manager name">${arr[i].name}</h5>
        <p class="card-text" id="manager title">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
        <li class="list-group-item"> Email: ${arr[i].email}</li>
        <li class="list-group-item"> Office Number: ${arr[i].officenumber}</li>
      </ul>
      `
    }
  }
  return managerCards
}

function generateEngineerCards (arr) {
  let engineerCards = ``
  console.log(arr)
  for(i=0; i< arr.length; i++) {
    if(arr[i].getTitle() == "Engineer") {
      engineerCards += `
      <div class="card" style="width: 18rem;">
      <img src="https://www.seekpng.com/png/full/188-1886576_file-emoji-u1f4bb-svg-computer-emoji.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${arr[i].name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
        <li class="list-group-item"> Email: ${arr[i].email}</li>
        <li class="list-group-item"> GitHub: ${arr[i].github}</li>
      </ul>

      `
    }
  }
  return engineerCards
}

function generateInternCards (arr) {
  let internCards = ``
  console.log(arr)
  for(i=0; i< arr.length; i++) {
    if(arr[i].getTitle() == "Intern") {
      internCards += `
      <div class="card" style="width: 18rem;">
      <img src="https://www.pngfind.com/pngs/m/215-2152933_cup-mug-coffee-black-and-white-coffee-emoji.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" id="name">${arr[i].name}</h5>
        <p class="card-text" id="title">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Employee ID: ${arr[i].id}</li>
        <li class="list-group-item"> Email: ${arr[i].email}</li>
        <li class="list-group-item"> School; ${arr[i].school}</li>
      </ul>
    
      `
    }
  } 
  return internCards
}

module.exports = genreateHTML;