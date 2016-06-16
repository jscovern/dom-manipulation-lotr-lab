console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middle_earth=document.createElement('section');
  middle_earth.setAttribute('id','middle-earth');
  for (var i=0; i<lands.length; i++) {
    land=document.createElement('article');
    heading = document.createElement('h1');
    heading.textContent=lands[i];
    land.appendChild(heading);
    middle_earth.appendChild(land);
  }
  document.body.appendChild(middle_earth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  hobbitUL = document.createElement('ul');
  for (var i = 0; i<hobbits.length; i++) {
    hobbitLI = document.createElement('li');
    hobbitLI.setAttribute('class','hobbit');
    hobbitLI.textContent=hobbits[i];
    hobbitUL.appendChild(hobbitLI);
  }
  document.querySelector('article').appendChild(hobbitUL);
}

  makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  newDiv = document.createElement('div');
  newDiv.setAttribute('id','the-ring');
  newDiv.setAttribute('class','magic-imbued-jewelry');
  newDiv.addEventListener('click',nazgulScreech);
  document.querySelector('li').appendChild(newDiv);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var ul = document.createElement('ul');
  for (var i=0; i<buddies.length; i++) {
    var list = document.createElement('li');
    list.textContent = buddies[i];
    ul.appendChild(list);
  }
  aside.appendChild(ul);
  document.querySelectorAll('h1')[1].appendChild(aside);
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.querySelectorAll('aside ul li')[3].textContent = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsList = document.querySelectorAll('li.hobbit');
  for (var i = 0; i<hobbitsList.length; i++) {
    document.querySelector('h1 aside ul').appendChild(hobbitsList[i]);  
  }

  //document.querySelector('h1').removeChild(document.querySelector('h1 ul'));

}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var newDiv = document.createElement('div');
  newDiv.setAttribute('id','the-fellowship');
  var locations = document.querySelectorAll('h1');
  locations[1].appendChild(newDiv);
  var characters = document.querySelectorAll('h1 aside ul li');
  for(i=0; i<characters.length; i++) {
    newDiv.appendChild(characters[i]);
    alert(characters[i].innerHTML+" has joined the party");
  }

}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  var characters = document.querySelectorAll("li");
  for(var i=0; i<characters.length; i++) {
    if(characters[i].innerHTML === "Gandalf the Grey") {
      characters[i].textContent = "Gandalf the White";
      characters[i].style.background="white";
      characters[i].style.border="5px solid grey";
      break;
    }
  }
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("Boromir's been killed by the Uruk-hai!");
  var characters = document.querySelectorAll("li");
  for(var i=0; i<characters.length; i++) {
    if(characters[i].innerHTML === "Boromir") {
      characters[i].style.textDecoration="line-through";
      break;
    }
  }
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var characters = document.querySelectorAll("li");
  var mordor=document.querySelectorAll('h1')[2];
  for(var i=0; i<characters.length; i++) {
    if(characters[i].textContent === "Frodo Baggins" || characters[i].textContent === 'Samwise \'Sam\' Gamgee') {
      mordor.appendChild(characters[i]);
    }
  }
  var newDiv = document.createElement('div');
  newDiv.setAttribute('id','mount-doom');
  mordor.appendChild(newDiv);

}
itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var newDiv = document.createElement('div');
  newDiv.setAttribute('div','gollum');
  var mordor = document.querySelectorAll('h1')[2];
  mordor.appendChild(newDiv);
  var ring=document.querySelector("#the-ring");
  var gollum = document.createElement('li');
  gollum.textContent = "Gollum";
  gollum.appendChild(ring);
  document.querySelector("#mount-doom").appendChild(gollum);
}
weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var gollum = document.querySelector("#mount-doom li");
  document.querySelector('#mount-doom').removeChild(gollum);
  var hobbits = document.querySelectorAll(".hobbit");
  for (var i=0; i<hobbits.length; i++) {
    document.querySelector('h1').appendChild(hobbits[i]);
  }
  var rivendell = document.querySelectorAll('h1')[1];
  var buds = rivendell.querySelectorAll('li');
  for (var x=0; x<buds.length; x++) {
    rivendell.removeChild(buds[x]);
  }
}
thereAndBackAgain();
