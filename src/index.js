module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return ones[number];
  }

  if (number < 100) {
    const ten = tens[Math.floor(number / 10)];
    const one = ones[number % 10];
    return one === 'zero' ? ten : `${ten} ${one}`;
  }

  const hundred = ones[Math.floor(number / 100)];
  const remainder = number % 100;

  if (remainder === 0) {
    return `${hundred} hundred`;
  }
  return `${hundred} hundred ${toReadable(remainder)}`;
};
