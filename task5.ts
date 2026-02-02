// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

function refactoring(num: number): string {
  return num.toString().padStart(2, "0");
}

function getDate(dateString?: string): string {
  let date: Date;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = new Date();
  }

  const day = refactoring(date.getDate());
  const month = refactoring(date.getMonth() + 1);
  const year = refactoring(date.getFullYear());
  const hours = refactoring(date.getHours());
  const minutes = refactoring(date.getMinutes());
  const seconds = refactoring(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

console.log(getDate("2026-10-22T22:10:15"));
