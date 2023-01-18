export const sum = (...numbers: number[]) =>
	numbers.reduce((total, number) => total + number, 0);
