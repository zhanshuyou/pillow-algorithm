const findOcurrences = (text: string, first: string, second: string) => {
  const arr = text.split(" ");
  let index = 0;
  const result = [] as string[];
  while (index < arr.length) {
    if (arr[index] === first && arr[index + 1] === second) {
      if (arr[index + 2]) result.push(arr[index + 2]);
      index += 2;
    } else {
      index += 1;
    }
  }
  return result;
};
