const lisEndingAtIdx = (arr: number[], idx: number): number => {
  if (idx === 0) return 1;

  let mx = 1;
  for (let prev = 0; prev < idx; prev++) {
    if (arr[prev] < arr[idx]) {
      mx = Math.max(mx, lisEndingAtIdx(arr, prev) + 1);
    }
  }
  return mx;
};

export const lis = (arr: number[]): number => {
  let n = arr.length;
  let res = 1;
  for (let idx = 1; idx < n; idx++) {
    res = Math.max(res, lisEndingAtIdx(arr, idx));
  }
  return res;
};
