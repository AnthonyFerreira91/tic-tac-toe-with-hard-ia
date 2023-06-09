export function IaHard(grid: string[], mark: string) {
	
	if(mark === 'x') {
		if(grid.filter(el => el !== null).length === 1) {
			if(grid[0] === "x") {
				const tabBestSecondPick = [4,8];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[2] === "x") {
				const tabBestSecondPick = [4,6];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[6] === "x") {
				const tabBestSecondPick = [4,2];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[8] === "x") {
				const tabBestSecondPick = [4,0];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[4] === "x") {
				const tabBestFirstPick = [0,2,6,8];
				const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
				return tabBestFirstPick[randomBestFirstPick]
			}
			if(grid[1] === "x") {
				const tabBestFirstPick = [0,2];
				const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
				return tabBestFirstPick[randomBestFirstPick]
			}
			if(grid[3] === "x") {
				const tabBestFirstPick = [0,6];
				const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
				return tabBestFirstPick[randomBestFirstPick]
			}
			if(grid[5] === "x") {
				const tabBestFirstPick = [2,8];
				const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
				return tabBestFirstPick[randomBestFirstPick]
			}
			if(grid[7] === "x") {
				const tabBestFirstPick = [6,8];
				const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
				return tabBestFirstPick[randomBestFirstPick]
			}
			return null
		}
		if(grid.filter(el => el !== null).length === 3) {
			if(grid[0] === 'x' && grid[4] === "x") {
				const tabBestSecondPick = [2, 6];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[2] === 'x' && grid[4] === "x") {
				const tabBestSecondPick = [0, 8];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[6] === 'x' && grid[4] === "x") {
				const tabBestSecondPick = [0, 8];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[8] === 'x' && grid[4] === "x") {
				const tabBestSecondPick = [2, 6];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
			if(grid[0] === 'x' && grid[8] === 'x' || grid[2] === 'x' && grid[6] === 'x'){
				const tabBestSecondPick = [1,3,5,7];
				const randomBestSecondPick = Math.floor(Math.random() * (tabBestSecondPick.length - 0));
				return tabBestSecondPick[randomBestSecondPick]
			}
		}
		return null
	}
	if(mark === 'o') {
		if(grid.filter(el => el !== null).length === 0) {
			const tabBestFirstPick = [0,2,6,8];
			const randomBestFirstPick = Math.floor(Math.random() * (tabBestFirstPick.length - 0));
			return tabBestFirstPick[randomBestFirstPick]
		}

		if(grid.filter(el => el !== null).length === 2) {
			if(grid[0] === "x" || grid[8] === "x") {
				if(grid[2] === "o" || grid[6] === "o" || grid[4] === "o") {
					if(grid[0] === "x") {
						return 8
					}
					return 0
				}
				if(grid[0] === "x" && grid[8] === "o" || grid[8] === "x" && grid[0] === "o") {
					return 4
				}
			}
			if(grid[2] === "x" || grid[6] === "x") {
				if(grid[0] === "o" || grid[8] === "o" || grid[4] === "o") {
					if(grid[2] === "x") {
						return 6
					}
					return 2
				}
				if(grid[2] === "x" && grid[6] === "o" || grid[6] === "x" && grid[2] === "o") {
					return 4
				}
			}
			if(grid[0] === "x") {
				if(grid[3] === "o" || grid[5] === "o") {
					return 2
				}
				if(grid[1] === "o" || grid[7] === "o") {
					return 6
				}
			}
			if(grid[2] === "x") {
				if(grid[3] === "o" || grid[5] === "o") {
					return 0
				}
				if(grid[1] === "o" || grid[7] === "o") {
					return 8
				}
			}
			if(grid[6] === "x") {
				if(grid[3] === "o" || grid[5] === "o") {
					return 8
				}
				if(grid[1] === "o" || grid[7] === "o") {
					return 0
				}
			}
			if(grid[8] === "x") {
				if(grid[3] === "o" || grid[5] === "o") {
					return 6
				}
				if(grid[1] === "o" || grid[7] === "o") {
					return 2
				}
			}
		}
		if(grid.filter(el => el !== null).length === 4) {
			if(grid[0] === "x" && grid[8] === "x") {
				if(grid[6] !== null) {
					return 2
				}
				return 6
			}
			if(grid[2] === "x" && grid[6] === "x") {
				if(grid[0] !== null) {
					return 8
				}
				return 0
			}
			if(grid[4] === null) {
				return 4
			}
		}
		return null
	}
}