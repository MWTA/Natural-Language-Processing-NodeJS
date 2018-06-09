/**
 * Classification
 * Description: Atualmente, a classificação é apoiada pelos algoritmos Naive Bayes e Logistic Regression, embora
 *              a implementação de Naive Bayes seja mais madura das duas. Pode ser usado para tarefas como detecção
 *              de spam e análise sentimentos.
 * 
 *              Há duas etapas fundamentais evolvidas no uso de um classificador: treinamento e classificação.
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

 /**
  * Treinamento
  */
var natural = require('natural'),
    classifier = new natural.BayesClassifier();

/**
 * Por padrão o classsificador irá tokenizar o corpus e estendê-lo com PorterStemmer.
 */
var natural = require('natural'),
    stemmer = natural.LancasterStemmer,
    classifier = new natural.BayesClassifier(stemmer);

classifier.addDocument("my unit-tests failed.", 'software');
classifier.addDocument("tried the program, but it was buggy.", 'software');
classifier.addDocument("the drive has a 2TB capacity.", 'hardware');
classifier.addDocument("i need a new power supply.", 'hardware');

classifier.train();

/**
 * Com o classificador treinado, agora ele pode classificar os documentos.
 * output: software 
 *         hardware
 */
console.log(classifier.classify('did the tests pass?'));
console.log(classifier.classify('did you buy a new drive?'));

/**
 * O Classificador pode ser treinado em matriz, em vez de strings, evitando tokenização e stemming.
 * Isso permite execução de tokenização personalizada e se possível, se houver alguma.
 * Muito especialmente quando o corpus não é inglês.
 */
classifier.addDocument(['unit', 'test'], 'software');
classifier.addDocument(['bug', 'program'], 'software');
classifier.addDocument(['drive', 'capacity'], 'hardware');
classifier.addDocument(['power', 'supply'], 'hardware');

classifier.train();

/**
 * É possível persistir e relembrar os resultados de um treinamento.
 */
var natural = require('natural'),
    classifier = new natural.BayesClassifier();

classifier.addDocument(['unit', 'test'], 'software');
classifier.addDocument(['bug', 'program'], 'software');
classifier.addDocument(['drive', 'capacity'], 'hardware');
classifier.addDocument(['power', 'supply'], 'hardware');

classifier.train();

classifier.save('classifier.json', function (err, classifier) {
    // the classifier is saved to the classifier.json file!
});

/**
 * O treinamento poderia então ser lembrado mais tarde
 */
var natural = require('natural'),
    classifier = new natural.BayesClassifier();
    
natural.BayesClassifier.load('classifier.json', null, function (err, classifier) {
    console.log(classifier.classify('did the tests pass?'));
});