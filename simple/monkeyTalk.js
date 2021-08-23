String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const monkeyTalk = phrase => phrase
  .split(" ")
  .map(word => (/^[aeiou]$/i).test(word[0]) ? 'eek' : 'ook') // ha a szó első karaktere magánhangzó, akkor eek, egyébként ook
  .join(" ")
  .capitalize() + "."

  module.exports = monkeyTalk
