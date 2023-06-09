type DifficultyType = {
	handleDifficulty: (difficulty: string) => void
}

export function Difficulty({handleDifficulty}: DifficultyType) {
	return (
		<div className="difficulty">
			<div className="difficulty__containerBtn">
				<h1>Choose Difficuly</h1>
				<button className="btn btn__difficulty btn__difficulty--easy" onClick={() => handleDifficulty("easy")}>Easy</button>
				<button className="btn btn__difficulty btn__difficulty--medium" onClick={() => handleDifficulty("medium")}>Medium</button>
				<button className="btn btn__difficulty btn__difficulty--hard" onClick={() => handleDifficulty("hard")}>Hard</button>
			</div>
		</div>
	)
}