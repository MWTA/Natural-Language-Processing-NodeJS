/**
 * Software: POS Tagger
 * Description: Este é um marcador de pare dea fala baseado no algorítimo de Eric Vrill's. 
 *              Regras de transformação são especificadas em arquivos externos.
 * Version: 0.0.1
 * Date: 01/04/2018
 * Author: Rodriguesfas
 * 
 * Contact
 * Email: <franciscosouzaacer@gmail.com> | <fasr@cin.ufpe.br>
 * Website: <http://rodriguesfas.com.br> | <http://clubedosgeeks.com.br>
 * Github: <https://github.com/rodriguesfas>
 */

var natural = require("natural");
var path = require("path");

var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);

var sentence = ["I", "see", "the", "man", "with", "the", "telescope"];
console.log(tagger.tag(sentence));