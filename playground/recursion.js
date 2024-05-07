export function countdown(n) {
  if (n <= 0) return;
  countdown(n - 1);
}
countdown(4);
