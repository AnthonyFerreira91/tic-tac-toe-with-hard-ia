export function getNextPlayer(grid: string[]) {
	const xNumber = grid.filter(el => el === 'x').length;
	const oNumber = grid.filter(el => el === 'o').length;
	return xNumber > oNumber ? 'o' : 'x'
}