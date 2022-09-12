// const prompt = require('prompt-sync')({ sigint: true });
// const { log } = require('forever');
// const { clear } = require('forever/lib/forever/cli');
// const readline = require('readline-sync');

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

  constructor(item) {

    this.item = item
  }

  addToTheList(item) {

    this.list.push(item)
  }

  removeFromTheList(item) {

    this.list = this.list.filter(el => el !== item)
  }
}



//       CREATED NEW GAME 
const shrugMan = new GuessingGame()


//       ADDING NEW SECRET PHRASES/WORDS

const starWars = new SecretWordOrPhrase('Star Wars: Episode VI -Return of the Jedi')
const apple = new SecretWordOrPhrase('An apple a day keeps the doctor away')
const braveHeart = new SecretWordOrPhrase('Braveheart')
const godFather = new SecretWordOrPhrase('The Godfather')
const mind = new SecretWordOrPhrase('A beautiful mind')
const thor = new SecretWordOrPhrase('Thor Love and Thunder')
const mission = new SecretWordOrPhrase('Mission Impossible Fallout')
const shawShank = new SecretWordOrPhrase('The Shawshank Redemption')
const batmanDark = new SecretWordOrPhrase('Batman The Dark Night')
const shindler = new SecretWordOrPhrase('Schindler\'s list')
const pulp = new SecretWordOrPhrase('Pulp Fiction')
const lord = new SecretWordOrPhrase('The Lord of the Rings: The Fellowship of the Ring')
const forrest = new SecretWordOrPhrase('Forrest Gump')
const fight = new SecretWordOrPhrase('Fight Club')
const inc = new SecretWordOrPhrase('Inception')
const empire = new SecretWordOrPhrase('Star Wars: Episode V - The Empire Strikes Back')
const the = new SecretWordOrPhrase('The Matrix')
const good = new SecretWordOrPhrase('Goodfellas')
const silence = new SecretWordOrPhrase('The Silence of the Lambs')
const city = new SecretWordOrPhrase('City of God')
const newHope = new SecretWordOrPhrase('Star Wars: Episode IV - A New Hope')

