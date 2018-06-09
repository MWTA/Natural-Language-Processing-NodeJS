/**
 * Software: Type-Token Ration (TTR)
 * Description: É a relação entre o número de tipos e o numero de tokens. Permite calcular a 
 *              variabilidade/riquesa do vocabulário (lexical de um idividuo). 
 *              TTR = (NoTy / NoTk) * 100
 *              
 *              Reference: [Type-token ratio of written language](https://www.sltinfo.com/type-token-ratio/)
 * 
 * Version: 0.0.1
 * Date: 01/04/2018
 * Author: Rodriguesfas
 * 
 * Contact
 * Email: <franciscosouzaacer@gmail.com> | <fasr@cin.ufpe.br>
 * Website: (http://rodriguesfas.com.br) | (http://clubedosgeeks.com.br)
 * Github: (https://github.com/rodriguesfas)
 */

var natural = require('natural');

var text = "But what are thoughts? Well, we all have them. They are variously described as ideas, notions, concepts, impressions, perceptions, views, beliefs, opinions, values, and so on. At times they are brief, coming and going in an instant. On other occasions they seem to endure and we can mull them over again and again in the act we call thinking. We can put them aside, fall asleep, and then return to them later. We refer to them as things we can handle. However, this is just a metaphor."

var tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize(text));