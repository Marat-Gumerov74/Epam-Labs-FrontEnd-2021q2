const { encode } = require('morsee');

class MorseConverter {

  ask(query) {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    })

    return new Promise(resolve => readline.question(query, ans => {
      readline.close();
      resolve(ans);
    }))
  }

  isCirillick = (str) => {
    return /[\u0400-\u04FF]/.test(str)
  }

  async main (){
    let phrase = await this.ask("What Phrase your need translate in morse?")

    if (this.isCirillick(phrase)) {
      console.log(`Your phrase: ${phrase} - your phrase contains Cyrillic characters!`);
    }
    console.log(encode(phrase));
  }
}

module.exports = MorseConverter;