/**
 * For a given string, return a ceasar ciphered version of it at a value 0f 13.
 *
 * @param {string} str
 * @returns {string}
 */
function rot13(str) {
  const charArr = str.toUpperCase().split("");

  charArr.forEach((char, index, charArr) => {
    const utf16Code = char.charCodeAt();

    if (char.match(/[A-Z]/g)) {
      charArr[index] = String.fromCharCode(((utf16Code - 65 + 13) % 26) + 65);
    }
  });

  return charArr.join("");
}
