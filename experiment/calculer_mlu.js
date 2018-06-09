/**
 * Software: Calculer MLU
 * Description: This is an implementation of the Mean Length of Utterance (MLU) calculation experiment
 *              based on the site: https://app.additor.io/p/jolOlkeT/a/LgWee2kj .
 * Version: 0.0.1
 * Date: 30/03/2018
 * Author: Rodriguesfas
 * 
 * Contact
 * Email: <franciscosouzaacer@gmail.com> | <fasr@cin.ufpe.br>
 * Website: <http://rodriguesfas.com.br> | <http://clubedosgeeks.com.br>
 * Github: <https://github.com/rodriguesfas>
 */
var natural = require('natural'),
    stemmer = natural.PorterStemmer;

/**
 * Sentences
 */
var sentence = [
    "go home now", 
    "I live in Billingham", 
    "mummy kissed my daddy",
    "I like your dogs"
];

/**
 * Tokenisers
 */
var tokenizer = new natural.WordTokenizer();

console.log("--------------------Tokenisers");
for (let index = 0; index < sentence.length; index++){
    console.log(tokenizer.tokenize(sentence[index]));
}


/**
 * Stemming
 */
console.log("--------------------Stemming");
for (let index = 0; index < sentence.length; index++) {
    var stem = stemmer.stem(sentence[index]);
    console.log(stem);
}
