/* Challenge 1
Write a function that uppercases the first character of string */
const firstUpper = (string) => { // javascript libraries
  return string.charAt(0).toUpperCase() + string.slice(1)
}
// console.log(firstUpper("hello girl"))

// Here's another way
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
// console.log("hello boy".capitalize())


/* Challenge 2 
allCaps() - makes all characters uppercase */

const allCaps = (str) => {
  return str.toUpperCase()
}
// console.log(allCaps("hello lady"))

/* Challenge 3 
capitalizeWords() - makes the first character of each word uppercase.
Imagine that each word is separated by a space. */

const capitalizeWords = (string) => {
	const wordList = string.split(" ")
	let finalString = ""
  wordList.forEach((word, _) => {
    const result = firstUpper(word)
    finalString = finalString.concat(result, " ")
  })
	return finalString.slice(0, -1)
}

console.log(capitalizeWords("just do it"))

/* Advanced 
capitalizeHeadline() - 
capitalizes all of the words except the articles: the, in, a, an, and, but, for, of, at, by, from */

const titleCase = (str) => {
  const articles = ["an", "the", "in", "a", "and", "but", "for", "of", "at", "by"]
  return str.toLowerCase().split(' ').map((word)=> {
    for (let i = 0; i < articles.length; i += 1) {
      
      if (articles.includes(word)) {
        return word;
      } 
      return word.replace(word[0], word[0].toUpperCase());
    }
  }).join(' ');
}
console.log(titleCase("munchausen syndrome by proxy is an unusual name for a cat"));

/* 
Challenge 4 
removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
*/
const removeExtraSpaces = (string) => {
	const wordList = string.split(" ")
	let finalString = ""
  wordList.forEach((word, _) => {
    const result = firstUpper(word)
    finalString = finalString.concat(result, " ")
  })
   
  const noExtraSpaces = finalString.slice(0, -1).trim()
  return noExtraSpaces
}

console.log(removeExtraSpaces(" help me "))

/*
Challenge 5 kabobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
 */
const arrayOfObjects = [
  { ' ': '-' }
]
var sentence1 = 'PROTEIN SOURCES ARE THE BUILDING BLOCKS OF A HEALTHY DIET'
sentence1 = sentence1.toLowerCase()
const result1 = arrayOfObjects.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), sentence1)

console.log(result1)
