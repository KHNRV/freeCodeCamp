function convertToRoman(num) {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const result = [];

  let numTracking = num;

  arabicNumerals.forEach((arabicNumeral, index) => {
    const numeralIteration = Math.floor(numTracking / arabicNumeral);
    result.push(romanNumerals[index].repeat(numeralIteration))
    numTracking = numTracking - arabicNumeral * numeralIteration;
  });

  return result.join("");
}

convertToRoman(4);
