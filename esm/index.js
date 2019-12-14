/* Challenge 1
Write a function that uppercases the first character of string */
var firstUpper = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
module.exports.firstUpper = firstUpper;
/* Challenge 2
allCaps() - makes all characters uppercase */
var allCaps = function (str) { return str.toUpperCase(); };
module.exports.allCaps = allCaps;
/* Challenge 3
capitalizeWords() - makes the first character of each word uppercase.
Imagine that each word is separated by a space. */
var capitalizeWords = function (str) {
    var wordList = str.split(' ');
    var finalString = '';
    wordList.forEach(function (word) {
        var result = firstUpper(word);
        finalString = finalString.concat(result, ' ');
    });
    return finalString.slice(0, -1);
};
module.exports.capitalizeWords = capitalizeWords;
/* Advanced
capitalizeHeadline() -
capitalizes all of the words except the articles: the, in, a, an, and, but, for, of, at, by, from */
var capitalizeHeadline = function (str) {
    var articles = ['an', 'the', 'in', 'is', 'a', 'and', 'but', 'for', 'of', 'at', 'by'];
    return str.toLowerCase().split(' ').map(function (word) {
        if (articles.includes(word)) {
            return word;
        }
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
};
module.exports.capitalizeHeadline = capitalizeHeadline;
/*
Challenge 4
removeExtraSpaces() -
Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
If more than one space appears in the middle of a string it is replaced by a single space.
*/
var removeExtraSpaces = function (str) {
    var wordList = str.split(' ');
    var finalString = '';
    wordList.forEach(function (word, _) {
        finalString = finalString.concat(word, ' ');
    });
    var noExtraSpaces = finalString.replace(/\s\s+/g, ' ').trim();
    return noExtraSpaces;
};
module.exports.removeExtraSpaces = removeExtraSpaces;
/*
Challenge 5 kabobCase() - Removes extra spaces and replaces spaces with the hyphen
*/
var kabobCase = function (str) { return str.split(' ').join('-'); };
module.exports.kabobCase = kabobCase;
/* Challenge 6 snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
Example: " what the heck " -> "what_the_heck"
Strategies:
Follow the example above and use the '_' instead of the '-'.
*/
var snakeCase = function (str) { return str.split(' ').join('_').toLowerCase(); };
module.exports.snakeCase = snakeCase;
/*
Challenge 7 camelCase() -
Lowercases the first character of the first word.
Then uppercases the first character of all other words, and removes all spaces.
Example: Camel Case -> camelCase
Strategies:
Use the ideas from capitalizeWords() function you wrote earlier.
str.split() the string on the ' ' to get and array of words.
Then loop starting on index 1 (you could use array.map())
and capitalize each word (use your function for this)then array.join() on the '' (empty string).
*/
var camelCase = function (str) { return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
}).replace(/\s+/g, ''); };
module.exports.camelCase = camelCase;
var toTitleCase = function (str) {
    var cleanString = str.replace(/[-_]/g, " ");
    return capitalizeWords(cleanString);
};
module.exports.toTitleCase = toTitleCase;
