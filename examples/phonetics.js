/**
 * Phonetics
 * Description: determina quais palavras soam e compará-las de acordo.
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

 /**
  * Compara a string "phonetics" e o erro ortográfico "fonetix" e determina 
  * que eles soam de acordo com o módulo Metaphone.  
  */
var natural = require('natural'), 
    phonetic = natural.Metaphone;

/**
 * Equivalente ao Metaphone, entretanto o Metaphone pode ter problemas com
 * as palavras não inglesas, entretanto o Double Metaphone pode ter sucesso
 * com outros idiomas.
 */
var natural = require('natural'), 
    phonetic = natural.SoundEx;

var wordA = 'phonetics';
var wordB = 'fonetix';

if (phonetic.compare(wordA, wordB))
    console.log('they sound alike!');

/**
 * O código bruto que o algoritmo fonético produz pode ser recuperado.
 */
var phoneticCode = phonetic.process('phonetics');
console.log(phoneticCode);

/**
 * 
 */
phonetic.attach();

if (wordA.soundsLike(wordB))
    console.log('they sound alike!');

console.log('phonetics'.phonetics());
console.log('phonetics rock'.tokenizeAndPhoneticize());