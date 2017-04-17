/*
Реализуйте и экспортируйте функцию calc, аргументами которой являются:
Операция в виде строки. Поддерживаются +, -, /,*.
Первый операнд.
Второй операнд.
Если передается операция которая не поддерживается, то функция должна 
вернуть NaN.
*/
export const calc = (operation, a, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};