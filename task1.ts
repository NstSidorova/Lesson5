// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
function sumOfNumbers(lastNumber: number = 0) {
  let sum = 0;
  for (let startNumber = 0; startNumber <= lastNumber; startNumber++) {
    sum += startNumber;
  }
  if (!Number.isInteger(lastNumber)) {
    sum += lastNumber - Math.floor(lastNumber);
  }
  console.log(sum);
}
sumOfNumbers(5);
