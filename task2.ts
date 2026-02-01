// Напишите самовызывающиеся функцию подсчета факториала числа: число должно передаваться как параметр функции

const result = (function countFactorial(num: bigint): bigint {
  if (num <= 1n) {
    return 1n;
  }
  return num * countFactorial(num - 1n);
})(100n);

console.log(result);
