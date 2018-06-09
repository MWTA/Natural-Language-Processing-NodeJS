/**
 * N Grams
 * Description: São essencialmente a desestruturação de uma sentença em lista contíguas sobrepostas de
 *              n tamanho e são úteis para construir modelos de linguagem probabilistica. Neste caso, 
 *              os n-gramas são compostos de palavras, mas fora do processamento de linguagem "natural"
 *              ou mesmo natural, poderiam se de outros objetos contéveis.
 * Date: 28/03/2018
 * Reference: <https://dzone.com/articles/using-natural-nlp-module>
 */

 /**
  * Considerando os seguinte exemplos que ilustram a produção de trigramas (n-gram de comprimento 3), bigramas 
  * (n-gramas de comprimento 2) e n-gramas arbitrários usando otrigramas, bigramas e funções ngrams.
  */
var NGrams = natural.NGrams;

console.log(NGrams.trigrams('some other words here'));
console.log(NGrams.trigrams(['some', 'other', 'words', 'here']));

console.log(NGrams.bigrams('some words here'));
console.log(NGrams.bigrams(['some', 'words', 'here']));
