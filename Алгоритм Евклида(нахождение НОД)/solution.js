/*Экспортируйте функцию по умолчанию, 
которая находит наибольший общий делитель 
двух положительных и целых чисел. */
export default (a, b) => {
        while (a !==0 && b !== 0) {
         if (a > b) {
             a = a % b;
         } else {
             b = b % a;
         }
         console.log(a,b);
     }
     return a + b; 
 };