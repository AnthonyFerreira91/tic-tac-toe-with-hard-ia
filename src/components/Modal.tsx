import { SvgComponent } from "./SvgComponent";

type ModalProps = {
	modal: string
	vsIa: boolean
	mark: string
	retry: () => void
	cancelRetry: () => void
}

export function Modal({modal, vsIa, mark, retry, cancelRetry}: ModalProps) {
	const exit = () => document.location.reload();

	let msgResult = '';
	let svgWinner: string | JSX.Element = '';
	let title = ' Takes the round';
	let styleTitle = "";
	let textBtnQuit = 'Quit';
	let textBtnRetry = 'Next Round';
	let cancelRetryOrExit = exit;

	switch(modal) {
		case 'retry':
			title = 'Restart Game?';
			textBtnQuit = 'No, cancel';
			textBtnRetry = 'Yes, restart';
			cancelRetryOrExit = cancelRetry;
			break;
		case 'equality':
			title = 'Round tied';
			break;
		case 'x':
			msgResult = vsIa ? (mark === 'x' ? "You won!" : "Oh no, you lost...")
									: (mark === 'x' ? "Player 1 wins!" : "Player 2 wins!");
			svgWinner = <SvgComponent name="x" width="64" height="64"/>;
			styleTitle = "modal__title--xStyle";
			break;
		case 'o':
			msgResult = vsIa ? (mark === 'o' ? "You won!" : "Oh no, you lost...")
									: (mark === 'o' ? "Player 1 wins!" : "Player 2 wins!");
			svgWinner = <SvgComponent name="o" width="64" height="64"/>;
			styleTitle = "modal__title--oStyle";
			break;
		case 'ia':
			title = 'Cpu Play';
			svgWinner = mark === 'x' ? <SvgComponent name="o" width="64" height="64"/>
												: <SvgComponent name="x" width="64" height="64"/>;
			styleTitle = mark === 'x' ? "modal__title--oStyle" : "modal__title--xStyle";
			break;
		default: break;
	}

	const cpuPlay = modal === 'ia' && "modal--iaPlay";

	return (
		<div className="viewFondModal">
			<div className={`modal ${cpuPlay}`}>
				<p>{msgResult}</p>
				<div className="modal__title">
					{svgWinner}
					<h2 className={styleTitle}>{title}</h2>
				</div>
				<div className="modal__btn">
					{modal === 'ia' ? "" : <button className='btn btn__modal btn__modal--exit' onClick={cancelRetryOrExit}>{textBtnQuit}</button>}
					{modal === 'ia' ? "" : <button className='btn btn__modal btn__modal--retry' onClick={retry}>{textBtnRetry}</button>}
				</div>
			</div>
		</div>
	)
}