const list = ['abul', 'babul', 'kabul', 'pitbul', 'babul', 'habul', 'abul', 'kabul', 'dabul'];

function noDuplicate(arrayList) {
  const unique = [];
  for (const item of arrayList) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(list);
console.log(uniqueArray);