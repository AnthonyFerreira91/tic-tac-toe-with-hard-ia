import { useState, useEffect } from 'react';
import { Square } from '../components/Square';
import { SvgComponent } from '../components/SvgComponent';
import { Modal } from '../components/Modal';
import { getNextPlayer } from '../functions/getNextPlayer';
import { someoneWin } from '../functions/someoneWin';
import { Ia } from '../functions/Ia';
import { LocalStorage } from '../class/LocalStorage';

type GameProps = {
	logo: string
	mark: string
	vsIa: boolean
	difficulty: string
}

export function Game({logo, mark, vsIa, difficulty}: GameProps) {
	const [grid, setGrid] = useState<string[]>(Array(9).fill(null));
	const [nbWinPlayer, setNbWinPlayer] = useState<number>(0);
	const [nbWinIAorPlayer2, setNbWinIAorPlayer2] = useState<number>(0);
	const [ties, setTies] = useState<number>(0);
	const [modal, setModal] = useState<string>("");
	const [iaPlay, setIaPlay] = useState<boolean>(false);
	const [lightWin, setLightWin] = useState<number[]>([]);

	useEffect(() => {
		if(someoneWin(grid)) {
			const isWinner = getNextPlayer(grid) === 'x' ? 'o' : 'x';
			if(isWinner === 'x'){
				mark === 'x' ? setNbWinPlayer(nb => nb + 1) : setNbWinIAorPlayer2(nb => nb + 1);
			} else {
				mark === 'o' ? setNbWinPlayer(nb => nb + 1) : setNbWinIAorPlayer2(nb => nb + 1);
			}
			if(Array.isArray(someoneWin(grid, "light"))) {
				const squareWin = someoneWin(grid, "light") as [];
				setLightWin(squareWin);
			}
			setTimeout(() => {
				setModal(`${isWinner}`);
			}, 350);
		} else if((grid.filter(el => el !== null)).length === 9) {
			setTies(nb => nb + 1);
			setModal('equality');
		}
		if(!someoneWin(grid)) {
			vsIa && getNextPlayer(grid) !== mark && setIaPlay(true);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [grid]);

	useEffect(() => {
		if(!modal && iaPlay) {
			setModal('ia')
			setTimeout(() => {
				setModal('');
			}, 400);
			setTimeout(() => {
				const iaHandle = Ia(grid, mark, difficulty);
				handleCheckBox(iaHandle as number);
			}, 600);
			setIaPlay(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [iaPlay]);

	useEffect(()=> {
		if(vsIa) {
			setNbWinPlayer(LocalStorage.get("nbWinPlayer"));
			setNbWinIAorPlayer2(LocalStorage.get("nbWinIA"));
			setTies(LocalStorage.get("tiesVsIA"));
		}
		if(!vsIa) {
			setNbWinPlayer(LocalStorage.get("nbWinPlayer1"));
			setNbWinIAorPlayer2(LocalStorage.get("nbWinPlayer2"));
			setTies(LocalStorage.get("tiesPvP"));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if(vsIa && modal) {
			LocalStorage.set("nbWinPlayer", nbWinPlayer);
			LocalStorage.set("nbWinIA", nbWinIAorPlayer2);
			LocalStorage.set("tiesVsIA", ties);
		}
		if(!vsIa && modal) {
			LocalStorage.set("nbWinPlayer1", nbWinPlayer);
			LocalStorage.set("nbWinPlayer2", nbWinIAorPlayer2);
			LocalStorage.set("tiesPvP", ties);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal]);

	const handleCheckBox = (index: number) => {
		if(!modal && grid[index] === null) {
			const newGrid = [...grid];
			newGrid[index] = getNextPlayer(grid);
			setGrid(newGrid);
		}
	}

	const retry = () => {
		setIaPlay(false);
		setGrid(Array(9).fill(null));
		setLightWin([]);
		setModal("");
	}

	const cancelRetry = () => {
		setModal("");
	}

	const showModal = modal ? <Modal
											modal={modal}
											vsIa={vsIa}
											mark={mark}
											retry={retry}
											cancelRetry={cancelRetry}
										/> : "";

	return (
		<div className="game">
			<div className='game__header'>
				<img className="logo" src={logo} alt="logo" />
				<div className="game__header__turn">
					<SvgComponent name={getNextPlayer(grid)} width="16" height="16"/>
					<p>turn</p>
				</div>
				<button onClick={() => setModal('retry')} className="game__header__btnRetry"><SvgComponent name="retry" width="16" height="16"/></button>
			</div>
			<div className="game__grid">
				<Square value={grid[0]} onClick={() => handleCheckBox(0)} id="0" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[1]} onClick={() => handleCheckBox(1)} id="1" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[2]} onClick={() => handleCheckBox(2)} id="2" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[3]} onClick={() => handleCheckBox(3)} id="3" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[4]} onClick={() => handleCheckBox(4)} id="4" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[5]} onClick={() => handleCheckBox(5)} id="5" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[6]} onClick={() => handleCheckBox(6)} id="6" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[7]} onClick={() => handleCheckBox(7)} id="7" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<Square value={grid[8]} onClick={() => handleCheckBox(8)} id="8" markTurn={getNextPlayer(grid)} lightWin={lightWin}/>
				<div className="game__grid__info game__grid__info--x">
					<p>{vsIa ? (mark === 'x' ? 'x (you)' : 'cpu') : (mark === 'x' ? 'x (p1)' : 'x (p2)')}</p>
					<h3>{mark === 'x' ? nbWinPlayer : nbWinIAorPlayer2}</h3>
				</div>
				<div className="game__grid__info game__grid__info--ties">
						<p>Ties</p>
						<h3>{ties}</h3>
				</div>
				<div className="game__grid__info game__grid__info--o">
					<p>{vsIa ? (mark === 'o' ? 'o (you)' : 'cpu') : (mark === 'o' ? 'o (p1)' : 'o (p2)')}</p>
					<h3>{mark === 'o' ? nbWinPlayer : nbWinIAorPlayer2}</h3>
				</div>
			</div>
			{showModal}
		</div>
	)
}