// const prompt = require('prompt-sync')({ sigint: true });
// const { log } = require('forever');
// const { clear } = require('forever/lib/forever/cli');
const readline = require('readline-sync');

// const readline = require("readline");
const { list } = require('forever');
const { clear } = require('forever/lib/forever/cli');

class GuessingGame {

  constructor(name) {

    this.name = name
    this.list = []
  }
}

class SecretWordOrPhrase {

  constructor(wordOrPhrase) {

    this.wordOrPhrase = wordOrPhrase
  }
}

class SecretWordOrPhraseManager {

  constructor(list) {


    this.list = list
  }

  addToTheList(...item) {

    this.list.push(...item)
  }

  removeFromTheList(item) {

    this.list = this.list.filter(el => el !== item)
  }
}



//       CREATED NEW GAME 
const filmGuess = new GuessingGame()


//       ADDING NEW SECRET PHRASES/WORDS

const starWars = new SecretWordOrPhrase('Star Wars Episode VI  Return of the Jedi')
const apple = new SecretWordOrPhrase('An apple a day keeps the doctor away')
const braveHeart = new SecretWordOrPhrase('Braveheart')
const godFather = new SecretWordOrPhrase('The Godfather')
const mind = new SecretWordOrPhrase('A beautiful mind')
const thor = new SecretWordOrPhrase('Thor Love and Thunder')
const mission = new SecretWordOrPhrase('Mission Impossible Fallout')
const shawShank = new SecretWordOrPhrase('The Shawshank Redemption')
const batmanDark = new SecretWordOrPhrase('Batman The Dark Knight')
const schindler = new SecretWordOrPhrase('Schindler\'s list')
const pulp = new SecretWordOrPhrase('Pulp Fiction')
const lord = new SecretWordOrPhrase('The Lord of the Rings The Fellowship of the Ring')
const forrest = new SecretWordOrPhrase('Forrest Gump')
const fight = new SecretWordOrPhrase('Fight Club')
const inc = new SecretWordOrPhrase('Inception')
const empire = new SecretWordOrPhrase('Star Wars Episode V  The Empire Strikes Back')
const the = new SecretWordOrPhrase('The Matrix')
const good = new SecretWordOrPhrase('Goodfellas')
const silence = new SecretWordOrPhrase('The Silence of the Lambs')
const city = new SecretWordOrPhrase('City of God')
const newHope = new SecretWordOrPhrase('Star Wars Episode IV  A New Hope')


//     CREATE  

//     ADDING ITEMS TO THE LIST

const filmGuessManager = new SecretWordOrPhraseManager(filmGuess.list)

filmGuessManager.addToTheList(starWars, apple, braveHeart, godFather, mind, thor, mission, shawShank, batmanDark, schindler, pulp, lord, forrest, fight, inc, empire, the, good, silence, city, newHope)

// console.log(filmGuess.list.length);
// console.log('HERE', Math.floor(Math.random() * filmGuess.list.length));
// console.log(Object.values(filmGuess.list[Math.floor(Math.random() * filmGuess.list.length)]));
// console.log((Object.values(filmGuess.list[Math.floor(Math.random() * filmGuess.list.length)]))[0].split(''));


// ----------------------ADDING NODE READLINE-------------------


const shrugManLogoArray = ['??', "\\", '_', "(", ":", " ", '/', ')', '_', '/', '??']
let shrugManLogoString = ""
let counter = 0
// const filmPicked = (Object.values(filmGuess.list[Math.floor(Math.random() * filmGuess.list.length)]))[0].toLowerCase().split('')
let filmPicked = []
let outcomeArray = []
letsStart()

function letsStart() {
  console.clear()
  filmPicked = (Object.values(filmGuess.list[Math.floor(Math.random() * filmGuess.list.length)]))[0].toLowerCase().split('')
  outcomeArray = Array(filmPicked.length).fill(" ")
  console.log('\n    ===== WELCOME TO THE GUESS THE FILM NAME GAME =====\n');
  // for (i = 0; i < filmPicked.length; i++) {
  //   if (filmPicked[i] === " ") {

  //     outcomeArray[i] = " "
  //   }
  console.log("HERE", filmPicked, outcomeArray);

  // emptySpaces()
  askForTheLetter()
}

// function emptySpaces() {
//   for (i = 0; i < filmPicked.length; i++) {
//     if (filmPicked[i] === " ") {

//       outcomeArray[i] = " "
//     }
//   }
// }



function askForTheLetter() {

  // 

  if (JSON.stringify(outcomeArray) !== JSON.stringify(filmPicked)) {

    if (counter !== 11) {

      let letter = readline.question('\n     Type a letter    ')

      if (filmPicked.includes(letter)) {

        for (i = 0; i < filmPicked.length; i++) {
          if (filmPicked[i] === letter) {

            outcomeArray[i] = letter
          }

          console.clear()
          // askForTheLetter()
        }
        console.log("\n" + '         ', outcomeArray.join(" "));
        console.log("\x1b[5m", '\n', '           ', "\x1b[33m", shrugManLogoString, "\x1b[0m")
        // askForTheLetter()

        // console.log("HERE", filmPicked, outcomeArray);
        //   shrugManLogoString += shrugManLogoArray[counter]
      } else {

        console.clear()
        console.log("\n" + '       ', outcomeArray.join(" "));
        shrugManLogoString += shrugManLogoArray[counter]
        console.log('\n', '           ', "\x1b[33m", "\x1b[5m", shrugManLogoString, "\x1b[0m")
        counter++
        // askForTheLetter()
      }

      askForTheLetter()

    } else {
      console.log('SORRY, you\'ve LOST');
      const endOfGame = readline.question('\n' + ' Fancy another round? (y or n)?   ')
      if (endOfGame == 'y') {
        letsStart()
      } return 'Ciao!';
    }
  }
  console.clear()
  console.log('Well done, you guessed it!');
  const endOfGameWin = readline.question('\n' + ' Fancy another round? (y or n)?   ')
  if (endOfGameWin === 'y') {


    letsStart()
  } else {
    thankFunct()
  }

  // return 0
}

function thankFunct() {
  console.log('Thanks for playing with us');
}


    //   console.log('SORRY, you\'ve LOST');
    //   const endOfGame = readline.question('\n' + ' Fancy another round? (y or n)?   ')
    //   if (endOfGame == 'y') {
    //     letsStart()
    //   } return 'Ciao!';
    // }
    // function winning() {
    // }