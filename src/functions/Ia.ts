import { someoneWin } from "./someoneWin";
import { IaHard } from "./IaHard";

export function Ia(grid: string[], mark: string, difficulty: string) {
	if(grid.filter(el => el !== null).length === 8) {
		let result = null;
		grid.forEach((el, index) => el === null ? result = index : null);
		if(result !== null) {
			return result
		}
	}
	if(someoneWin(grid, 'ia') !== null) {
		if(difficulty !== "easy") {
			return someoneWin(grid, 'iaMedium', mark);
		}
		return someoneWin(grid, 'ia')
	}

	if(difficulty === "hard" && IaHard(grid, mark) !== null) {
		return IaHard(grid, mark);
	}

	const squaresRemaining: number[] = [];
	grid.filter((el,index) => {
		if(el === null) {
			squaresRemaining.push(index);
		}
	});
	const randomNumber = Math.floor(Math.random() * (squaresRemaining.length - 0));
	return squaresRemaining[randomNumber]
}