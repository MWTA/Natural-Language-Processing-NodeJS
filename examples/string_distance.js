/**
 * String Sistance
 * Description: Determina similaridade da cadeia de caracteres. (ortografia)
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */


var natural = require('natural');

console.log(natural.JaroWinklerDistance('execution', 'intention'));
console.log(natural.LevenshteinDistance('execution', 'intention'));
console.log(natural.DiceCoefficient('execution', 'intention'));

/**
 * Agora, para considerar sequências totalmente idênticas.
 */
console.log(natural.JaroWinklerDistance('same', 'same'));
console.log(natural.LevenshteinDistance('same', 'same'));
console.log(natural.DiceCoefficient('same', 'same'));