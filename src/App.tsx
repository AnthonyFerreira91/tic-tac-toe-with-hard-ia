import { useState, MouseEvent } from 'react';
import { NewGame } from "./pages/NewGames";
import { Difficulty } from './pages/Difficulty';
import { Game } from './pages/Game';
import logo from './assets/logo.svg';

function App() {
  const [game, setGame] = useState<string>("no");
  const [mark, setMark] = useState<string>('x');
  const [vsIa, setVsIa] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>("easy");

	const handleChangeMark = (e: MouseEvent) => {
		e.preventDefault();
		e.currentTarget.id === 'x' && mark === 'o' && setMark('x');
		e.currentTarget.id === 'o' && mark === 'x' && setMark('o');
	}

  const handleStartGame = (iaOrPlayer: boolean) => {
    if(iaOrPlayer) {
      setVsIa(true)
      setGame("difficulty")
    } else {
      setVsIa(false);
      setGame("yes");
    }
  }

  const handleDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
    setGame("yes");
  }

  const showGame = game === "yes" ? <Game logo={logo} mark={mark} vsIa={vsIa} difficulty={difficulty}/>
                  : game === "difficulty" ? <Difficulty handleDifficulty={handleDifficulty}/>
                                          : <NewGame
                                              logo={logo} 
                                              mark={mark} 
                                              handleChangeMark={handleChangeMark} 
                                              handleStartGame={handleStartGame}
                                            />;

  return (
    <>
      {showGame}
    </>
  )
}

export default App;
