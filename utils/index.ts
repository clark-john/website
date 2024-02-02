export function generateLightnessPercentages(count: number, difference: number = 11){
	const start = 14;

	const arr = []

	for (let x = 0; x < count; x++) {
		arr.push((start + (difference * x)) + "%");
	}

	return arr;
}	

export { setupIcons } from './icons';
