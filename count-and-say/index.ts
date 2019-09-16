const countAndSay = (num: number) => {
  if (num === 1) return "1";
  const prevStr = countAndSay(num - 1);
  let temp = prevStr[0];
  let count = 0;
  let result = "";
  for (let i = 0; i < prevStr.length; i++) {
    if (temp === prevStr[i]) {
      count++;
    } else {
      result += `${count}${temp}`;
      temp = prevStr[i];
      count = 1;
    }
    if (i === prevStr.length - 1) {
      return (result += `${count}${temp}`);
    }
  }
  return result;
};

// console.log(countAndSay(5))
