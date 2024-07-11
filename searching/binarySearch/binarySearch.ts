export default function binarySearch(arr: number[], v: number): number | false {
  const start = 0;
  const end = arr.length;
  let result: false | number = false;

  function search(start: number, end: number) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    if (v === arr[mid]) {
      result = mid;
      return;
    } else if (v <= arr[mid]) {
      search(start, mid);
    } else {
      search(mid, end);
    }
  }

  search(start, end);

  return result;
}
