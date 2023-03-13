console.log('this works')

function sayHello() {
    console.log('Hi')
}

sayHello ()

const age = 27;
const height = 4.5;

if(age < 8){
  console.log("Check out the merry go round!")
} else if (age > 8 && age < 65 && height > 4.5){
  console.log("Check out the roller coaster!")
} else {
  console.log("Check out the Lazy River!")
}

let noun = ['heart', 'feet', 'stomach', 'eyes', 'hands'];
let adjective = ['crazy', 'excitedly', 'quickly', 'once', 'never'];
let verb = ['look', 'listen', 'hear', 'touch', 'smell'];

let randomNoun = noun[Math.floor(Math.random()*noun.length)];
let randomAdjective = adjective[Math.floor(Math.random()*adjective.length)];
let randomVerb = verb[Math.floor(Math.random()*verb.length)];

console.log(`My ${randomNoun} leaps ${randomAdjective} when I ${randomVerb} at a rainbow in the sky`)



  