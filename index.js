function sumItems(array) {
  // sum all items in the array
  let current = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      current += sumItems(item);
    } else {
      current += item;
    }
  });
  return current;
}

module.exports = sumItems;