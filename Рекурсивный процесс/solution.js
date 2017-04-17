/*Реализуйте функцию sequenceSum, 
которая находит сумму последовательности 
целых чисел. Последовательность задается 
тремя значениями: begin - начало 
последовательности, end - 
конец последовательности, step - шаг*/
export const sequenceSum = (begin, end, step) => {
	if (begin > end) {
		return 0;
	}
	return begin + sequenceSum(begin + step, end, step);

};
