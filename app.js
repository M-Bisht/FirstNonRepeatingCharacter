const firstNonRepeatingCharacter = str => {
  str = str.toLowerCase();
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
};

console.log(firstNonRepeatingCharacter('Elephant'));
