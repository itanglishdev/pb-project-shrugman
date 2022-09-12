// const prompt = require('prompt-sync')({ sigint: true });
const readline = require('readline-sync');

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


