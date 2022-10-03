export function fibs(num): number[] {
	let result = [0, 1];
	if (num === 0) return [0];
	if (num === 1) return [0, 1];
	for (let i = 2; i <= num; i++) {
		result.push(result[result.length - 1] + result[result.length - 2]);
	}
	return result;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(21));

export function fibsRec(num): number {
	if (num < 2) return num;
	return fibsRec(num - 1) + fibsRec(num - 2);
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
console.log(fibsRec(21));
