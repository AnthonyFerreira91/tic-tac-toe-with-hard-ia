export function someoneWin(grid: string[], feature?: string, mark?: string) {
	const victoryCondition = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	if(feature === 'ia' || feature === 'iaMedium'){
		let result = null;
		let resultMedium = null;
		victoryCondition.filter(tab => {
			if(grid[tab[0]] !== null && grid[tab[0]] === grid[tab[1]] && grid[tab[2]] === null) {
				if(feature === 'iaMedium') {
					if(grid[tab[0]] !== mark){
						resultMedium = tab[2]
					}
				}
				result = tab[2];
			} else if(grid[tab[0]] !== null && grid[tab[0]] === grid[tab[2]] && grid[tab[1]] === null) {
				if(feature === 'iaMedium') {
					if(grid[tab[0]] !== mark){
						resultMedium = tab[1]
					}
				}
				result = tab[1];
			} else if(grid[tab[1]] !== null && grid[tab[1]] === grid[tab[2]] && grid[tab[0]] === null) {
				if(feature === 'iaMedium') {
					if(grid[tab[1]] !== mark){
						resultMedium = tab[0]
					}
				}
				result = tab[0];
			}
		});
		
		if(feature === 'iaMedium' && resultMedium !== null) {
			return resultMedium
		}
		return result !== null && grid[result] === null ? result : null
	}

	if(feature === 'light') {
		const lightVictory = victoryCondition.filter(tab => grid[tab[0]] !== null && grid[tab[0]] === grid[tab[1]] && grid[tab[1]] === grid[tab[2]]);
		return lightVictory[0]
	}
	

	return victoryCondition
				.filter(tab => grid[tab[0]] !== null)
				.some(tab => grid[tab[0]] === grid[tab[1]] && grid[tab[1]] === grid[tab[2]]);
}