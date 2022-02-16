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
            <!-- CARD ONE -->
            ${generateManagerCards(response)}
    
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="manager name">${Manager.name}</h5>
                  <p class="card-text" id="manager title">${Manager.getTitle}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="mgrIdNo">Employee ID: ${Manager.id}</li>
                  <li class="list-group-item" id="mgrEmail>Email: ${Manager.email}</li>
                  <li class="list-group-item" id="mgrOfficeNo>Office Number: ${Manager.officenumber}</li>
                </ul>
              //   <div class="card-body">
              //     <a href="#" class="card-link">Card link</a>
              //     <a href="#" class="card-link">Another link</a>
              //   </div>
              // </div>
    
            <!-- CARD TWO -->
            ${generateEngineerCards(response)}
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="engineer name>${Engineer.name}</h5>
                  <p class="card-text" id="engineer title>${Engineer.getTitle}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="engineer id">Employee ID: ${Engineer.id}</li>
                  <li class="list-group-item" id="engineer github>Email: ${Engineer.email}</li>
                  <li class="list-group-item"d="engineer github>GitHub: ${Engineer.github}</li>
                </ul>
              //   <div class="card-body">
              //     <a href="#" class="card-link">Card link</a>
              //     <a href="#" class="card-link">Another link</a>
              //   </div>
              // </div>
    
              <!-- CARD THREE -->
              ${generateInternCards(response)}
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="name">${Intern.name}</h5>
                  <p class="card-text" id="title">${Intern.getTitle}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="id">Employee ID: ${Intern.id}</li>
                  <li class="list-group-item">Email: ${Intern.email}</li>
                  <li class="list-group-item">School; ${Intern.school}</li>
                </ul>
              //   <div class="card-body">
              //     <a href="#" class="card-link">Card link</a>
              //     <a href="#" class="card-link">Another link</a>
              //   </div>
              // </div>
    
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
      html here
      ${arr[i].name}
      `
    }
  }
  return managerCards
}
module.exports = genreateHTML;