import { MouseEventHandler } from 'react';
import { SvgComponent } from '../components/SvgComponent';

type NewGamesProps = {
	logo: string
	mark: string
	handleChangeMark: MouseEventHandler<HTMLDivElement>
	handleStartGame: (iaOrPlayer: boolean) => void
}

export function NewGame({logo, mark, handleChangeMark, handleStartGame}: NewGamesProps) {
	
	const moveCursor = mark === "o" ? {
		transform: "translateX(102%)",
		transition: "transform .5s ease-in-out"
	} : {
		transform: "translateX(0)",
		transition: "transform .5s ease-in-out"
	};

	return (
		<div className="containerNewGame">
			<img className="logo" src={logo} alt="logo" />
			<div className='pickContainer'>
				<h4>Pick player 1's mark</h4>
				<div className="pickContainer__mark">
					<div style={moveCursor} className='pickContainer__mark--cursor'></div>
					<div onClick={handleChangeMark} id='x' className={mark === "o" ? "inactive": ""}>
						<SvgComponent name="x" width="32" height="32"/>
					</div>
					<div onClick={handleChangeMark} id='o' className={mark === "x" ? "inactive": ""}>
						<SvgComponent name="o" width="32" height="32"/>
					</div>
				</div>
				<p>Remember : X goes first</p>
			</div>
			<div className='containerBtnVs'>
				<button onClick={() => handleStartGame(true)} className="btn btn__vs btn__vs--mainColor">New Game (vs CPU)</button>
				<button onClick={() => handleStartGame(false)} className="btn btn__vs btn__vs--secondaryColor">New Game (vs player)</button>
			</div>
		</div>
	)
}