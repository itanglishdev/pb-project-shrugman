// const prompt = require('prompt-sync')({ sigint: true });


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
}