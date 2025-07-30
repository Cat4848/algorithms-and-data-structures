export default function binarySearch(arr: number[], v: number): number {
  const start = 0;
  const end = arr.length;

  function search(start: number, end: number) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    if (v === arr[mid]) {
      return mid;
    } else {
      if (v <= arr[mid]) {
        return search(start, mid);
      } else {
        return search(mid, end);
      }
    }
  }

  return search(start, end) || -1;
}
