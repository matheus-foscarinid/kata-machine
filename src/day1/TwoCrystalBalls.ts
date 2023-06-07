export default function two_crystal_balls(breaks: boolean[]): number {
  const sqrt = Math.sqrt(breaks.length);
  const jmpSize = Math.floor(sqrt);

  let index = 0;
  for (index = jmpSize ; index < breaks.length ; index += jmpSize) {
    if (breaks[index]) {
      break;
    }
  }

  index -= jmpSize;

  for (let j = index ; j < jmpSize && index < breaks.length ; j++, index++) {
    if (breaks[index]) {
      return index;
    }
  }

  return -1;
}