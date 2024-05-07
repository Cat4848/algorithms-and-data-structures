// part of the divide and conquer algorithms

export default function mergeSort(list, p, r) {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSort(list, p, q);
  mergeSort(list, q + 1, r);
  merge(list, p, q, r);
  return list;
}

function merge(list, p, q, r) {
  const leftLength = q - p + 1;
  const rightLength = r - q;

  const leftList = [];
  const rightList = [];

  for (let i = 0; i < leftLength; i++) {
    leftList[i] = list[p + i - 1];
  }

  for (let j = 0; j < rightLength; j++) {
    rightList[j] = list[q + j];
  }

  let i = 0;
  let j = 0;
  let k = p - 1;

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

const unsortedList = [12, 3, 7, 9, 14, 6, 11, 2];
const sortedList = mergeSort(unsortedList, 1, unsortedList.length);