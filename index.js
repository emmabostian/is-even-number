// Main package
function isEvenNumber(number) {
  if (isNaN(number)) {
    return false;
  }

  return number % 2 === 0;
}

module.exports = isEvenNumber;
