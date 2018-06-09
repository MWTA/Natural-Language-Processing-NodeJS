/**
 * Inflection
 * Description: Insufladores básicos estão em vigor para converter substantivos entre formas 
 *              no plural e no singular e para transformar números inteiros em contadores de
 *              cadeias de caracteres (ou seja, '1st', '2nd', '3rd', '4th' etc.).
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

 /**
  * Converte a palavra para a sua forma no plural.
  * word input: radius
  * word output: raadii
  */
var natural = require('natural'),
    nounInflector = new natural.NounInflector();

var plural = nounInflector.pluralize('radius');
console.log(plural);

/**
 * A singularização segue o mesmo padrão,converte a palavra do plural para o singular.
 * word input: beers
 * word output: beer
 */
var singular = nounInflector.singularize('beers');
console.log(singular);

/**
 * 
 */
nounInflector.attach();
console.log('radius'.pluralizeNoun());
console.log('beers'.singularizeNoun());

/**
 * conversões personalizadas.
 */
nounInflector.addPlural(/(code|ware)/i, '$1z');
nounInflector.addSingular(/(code|ware)z/i, '$1');

console.log('code'.pluralizeNoun());
console.log('ware'.pluralizeNoun());
console.log('codez'.singularizeNoun());
console.log('warez'.singularizeNoun());

/**
 * contador de strings
 */
var natural = require('natural'),
    countInflector = natural.CountInflector;
    
console.log(countInflector.nth(1));
console.log(countInflector.nth(2));
console.log(countInflector.nth(3));
console.log(countInflector.nth(4));
console.log(countInflector.nth(10));
console.log(countInflector.nth(11));
console.log(countInflector.nth(12));
console.log(countInflector.nth(13));
console.log(countInflector.nth(100));
console.log(countInflector.nth(101));
console.log(countInflector.nth(102));
console.log(countInflector.nth(103));
console.log(countInflector.nth(110));
console.log(countInflector.nth(111));
console.log(countInflector.nth(112));
console.log(countInflector.nth(113));