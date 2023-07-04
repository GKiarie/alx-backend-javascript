export default function cleanSet(set, startString) {
  if (!startString || !set || startString === '') {
    return '';
  }
  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}
