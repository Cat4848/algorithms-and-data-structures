export default function binarySearch(arr: number[], v: number): number | false {
  const start = 0;
  const end = arr.length - 1;

  function search(start: number, end: number) {
    if (start === end) return;

    const mid = Math.floor(end / 2);
    if (v <= arr[mid]) {
      search(start, mid);
    } else {
      search(mid, end);
    }
  }

  return false;
}
