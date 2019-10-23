/* Challenge 1
Write a function that uppercases the first character of string */
const firstUpper = (string) => { // javascript libraries
  return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(firstUpper("hello girl"))

// Here's another way
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
console.log("hello boy".capitalize())


/* Challenge 2 
allCaps() - makes all characters uppercase */

const allCaps = (str) => {
  return str.toUpperCase()
}
console.log(allCaps("hello lady"))

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

const arr = "Baklava is an unusual name for a dog".split(" ")

// substringsArray.some(substring=>yourBigString.includes(substring))

const titleCase = (str) => {
  const arr1 = ["an", "the", "in", "a", "and", "but", "for", "of", "at", "by"]
  return str.toLowerCase().split(' ').map((word)=> {
    for (let i = 0; i < arr1.length; i =+ 1) {
      if (arr1[i] === word){
        return word;
      } 
      return word.replace(word[0], word[0].toUpperCase());
    }
  }).join(' ');
}
console.log(titleCase("munchausen syndrome by proxy is an unusual name for a cat"));


