export default function bs_list(haystack: number[], needle: number): boolean {
  // Low is inclusive
  let low = 0;
  // High is exclusive
  let high = haystack.length;

  do {
    const mid = Math.floor((low + high) / 2);
    const guess = haystack[mid];

    if (guess === needle) {
      return true;
    } else if (guess > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);

  return false;
}