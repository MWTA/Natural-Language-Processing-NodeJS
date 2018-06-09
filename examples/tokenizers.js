/**
 * Tokenisers
 * Description: Divide a frase em uma matriz com de suas palavras idividuais.
 * Date: 28/03/2018
 */
var natural = require('natural');

/**
 * word output: [ 'your', 'dog', 'has', 'fleas' ]
 */
var tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize("your dog has fleas."));

/**
 * word output: [ 'my', 'dog', 'has', 'n\'t', 'any', 'fleas', '.' ]
 */
tokenizer = new natural.TreebankWordTokenizer();
console.log(tokenizer.tokenize("my dog hasn't any fleas."));

/**
 * word output: [ 'flea', 'dog' ]
 */
tokenizer = new natural.RegexpTokenizer({ pattern: /\-/ });
console.log(tokenizer.tokenize("flea-dog"));

/**
 * word output: [ 'my', 'dog', 'hasn', '\'', 't', 'any', 'fleas', '.' ]
 */
tokenizer = new natural.WordPunctTokenizer();
console.log(tokenizer.tokenize("my dog hasn't any fleas."));