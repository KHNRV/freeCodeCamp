function palindrome(str) {
  const filteredStr = str
    .match(/[a-zA-Z0-9]/gm)
    .join()
    .toLowerCase();
  const reversedFiltStr = str
    .match(/[a-zA-Z0-9]/gm)
    .reverse()
    .join()
    .toLowerCase();
  return filteredStr === reversedFiltStr;
}
