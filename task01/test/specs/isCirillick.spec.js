const MorseConverter = require('../../App/morse-converter');
const {expect} = require('chai');

describe('isCirillic positie scenarios', () => {
  let morseconverter;
  beforeEach(function(){
    morseconverter = new MorseConverter();
  });
  afterEach(function() {
    morseconverter = null;
  });
  it (`should return false if string is in english`, function() {
    expect(morseconverter.isCirillick('words')).to.be.equal(false);
  });
  it('should return true if string is in  NOT english', function(){
    expect(morseconverter.isCirillick('АМБА')).to.be.equal(true);
  });
});
