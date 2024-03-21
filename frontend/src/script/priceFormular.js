export function getChineseTablePrice(pricePerTable, people) {
  let result = (pricePerTable / 100) * people;
  return result;
}
