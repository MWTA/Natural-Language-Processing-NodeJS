/**
 * TF-IDF
 * Description: jugar a importância de uma determinada palavra para um dado documento em um corpus
 *              mais amplo (coleção de documentos). Exixtem dois componentes para um peso tf-idf: 
 *              o termo freência e frequência inversa do documento. Para grantir que uma palavra
 *              frequentimente usada, embora semanticamente menos importante, não seja muito favorável,
 *              você deve garantir que tenha muitos documentos em seu clone Tf-Idf.
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

 /**
  * Adiciona alguns documentos a um corpus e, em seguida, determina a importância
  * das palavras "ruby" e "node" para eles.
  * Quanto maior o peso, mais importante a palavra é para o documento.
  */

var natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

tfidf.addDocument('i code in c.');
tfidf.addDocument('i code in ruby.');
tfidf.addDocument('i code in ruby and node, but node more often.');
tfidf.addDocument('this document is about natural, written in node');
tfidf.addDocument('i code in fortran.');

console.log('node --------------------------------');
tfidf.tfidfs('node', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('ruby --------------------------------');
tfidf.tfidfs('ruby', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

/**
 * Mede uma palavra em um único documento.
 */
console.log(tfidf.tfidf('ruby', 0 /* document index */));
console.log(tfidf.tfidf('ruby', 1));

/**
 * Obtem uma lista de todos os termos em um documento ordenado por sua importância.
 */
tfidf.listTerms(4 /* document index */).forEach(function (item) {
    console.log(item.term + ': ' + item.tfidf);
});