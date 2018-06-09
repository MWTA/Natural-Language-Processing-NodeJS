/**
 * Stemming
 * Description: é o processo de reduzir um palavra a um raiz.
 * Date: 27/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

var natural = require('natural'), 
    stemmer = natural.PorterStemmer;

/**
 * Lematizador LancasterStemmer, a "mesma coisa" que o PorterStemmer, 
 * tendendo ser mais agressivo. Resultando em raízes que se parecem menos
 * com seus quivalentes, porem com um desempenho melhor.
 */
 var natural = require('natural'), 
    stemmer = natural.LancasterStemmer;



/**
 * word input: stems
 * word output: stem
 * 
 * remove morpheme s
 */
var stem = stemmer.stem('stems');
console.log(stem);

/**
 * word input: stemming
 * word output: stem
 * 
 * remove morpheme: ing
 */
stem = stemmer.stem('stemming');
console.log(stem);

/**
 * word input: stemmed
 * word output: stem
 * 
 * remove morpheme: med
 */
stem = stemmer.stem('stemmed');
console.log(stem);

/**
 * lematizador para corrigr a String.
 */
stemmer.attach();
stem = stemmer.stem('stem');
console.log(stem);

/**
 * cria uma string composta de muitas palavras.
 * 
 * words input: stems returned
 * words outpun: stem retur
 * 
 * remove morpheme: s, ned
 */
var stems = 'stems returned'.tokenizeAndStem();
console.log(stems);

/**
 * Omite palavras consideradas inreevantes.
 */
console.log('i stemmed words.'.tokenizeAndStem());
console.log('i stemmed words.'.tokenizeAndStem(true));



