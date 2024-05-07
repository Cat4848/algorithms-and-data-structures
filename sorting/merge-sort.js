// part of the divide and conquer algorithms

function mergeSort() {}

function merge(list, p, q, r) {
  const leftLength = q - p;
  const rightLength = r - q;

  const leftList = [];
  const rightList = [];

  for (let i = 0; i < leftLength; i++) {
    leftList[i] = list[p + i];
  }

  for (let j = 0; j < rightLength; j++) {
    rightList[j] = list[q + j + 1];
  }

  let i = 0;
  let j = 0;
  let k = p;

  while (i < leftLength && j < rightLength) {
    if (leftList[i] <= rightList[j]) {
      list[k] = leftList[i];
      i++;
    } else {
      list[k] = rightList[j];
      j++;
    }
    k++;
  }

  while (i < leftLength) {
    list[k] = leftList[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    list[k] = rightList[j];
    j++;
    k++;
  }
}
