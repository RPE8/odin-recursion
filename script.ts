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


function merge(left: number[], right: number[]): number[] {
	const result: number[] = [];
	while (left.length && right.length) {
		let value: number | undefined;
		if (left[0] < right[0]) {
			value = left.shift();
			if (value) result.push(value);
		} else {
			value = right.shift();
			if (value) result.push(value);
		}
	}
	return [...result, ...left, ...right];
}

function mergeSort(arr: number[]): number[] {
	if (arr.length < 2) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 3, 5, 2, 4, 6]));
console.log(mergeSort([1, 3, 5]));