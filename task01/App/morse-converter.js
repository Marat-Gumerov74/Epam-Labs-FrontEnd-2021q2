const { encode } = require('morsee');
const readline = require('readline-sync');

class MorseConverter {

  async createPhrase() {
    let phrase = await readline.question("Give me phrase in english! ");
    return phrase;
  }

  isCirillick = (str) => {
    return /[\u0400-\u04FF]/.test(str);
  }

  makeMorse = () => {
    this.createPhrase()
    .then((phrase) => {
      if (!this.isCirillick(phrase)) {
        console.log(encode(phrase));
      }
    })
  }
};

module.exports = MorseConverter;