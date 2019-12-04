/*
Uppercases the first character of string */
var firstUpper = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports.firstUpper = firstUpper;


/* 
allCaps() - makes all characters uppercase */
var allCaps = function (string) { return string.toUpperCase(); };
module.exports.allCaps = allCaps;
/*
capitalizeWords() - makes the first character of each word uppercase.
Imagine that each word is separated by a space. */
var capitalizeWords = function (string) {
    var wordList = string.split(' ');
    var finalString = '';
    wordList.forEach(function (word) {
        var result = firstUpper(word);
        finalString = finalString.concat(result, ' ');
    });
    return finalString.slice(0, -1);
};
module.exports.capitalizeWords = capitalizeWords;
/* 
capitalizes all of the words except the articles: the, in, a, an, and, but, for, of, at, by, from */
var capitalizeHeadline = function (string) {
    var articles = ['an', 'the', 'in', 'is', 'a', 'and', 'but', 'for', 'of', 'at', 'by'];
    return string.toLowerCase().split(' ').map(function (word) {
        if (articles.includes(word)) {
            return word;
        }
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
};
module.exports.capitalizeHeadline = capitalizeHeadline;
/*
Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
If more than one space appears in the middle of a string it is replaced by a single space.
*/
var removeExtraSpaces = function (string) {
    var wordList = string.split(' ');
    var finalString = '';
    wordList.forEach(function (word, _) {
        finalString = finalString.concat(word, ' ');
    });
    var noExtraSpaces = finalString.replace(/\s\s+/g, ' ').trim();
    return noExtraSpaces;
};
module.exports.removeExtraSpaces = removeExtraSpaces;
/*
Removes extra spaces and replaces spaces with the hyphen
*/
var kabobCase = function (string) { return string.split(' ').join('-'); };
module.exports.kabobCase = kabobCase;
/* Challenge 6 snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
*/
var snakeCase = function (string) { return string.split(' ').join('_').toLowerCase(); };
module.exports.snakeCase = snakeCase;
/*

*/
var camelCase = function (string) { return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
}).replace(/\s+/g, ''); };
module.exports.camelCase = camelCase;


//This function works with regex to remove underscores and hyphens and uppercase each letter of the string
var toTitleCase = function (str) {
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join()
}

module.exports.toTitleCase = toTitleCase;
