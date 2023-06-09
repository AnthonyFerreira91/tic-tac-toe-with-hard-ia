import { useState, MouseEventHandler } from "react";
import { SvgComponent } from "./SvgComponent";

type SquareProps = {
	value: string
	onClick: MouseEventHandler<HTMLDivElement>
	id: string
	markTurn: string
	lightWin: number[]
}

export function Square({value, onClick, id, markTurn, lightWin}: SquareProps) {
	const [seeHoverMark, setSeeHoverMark] = useState(false);

	const valueSvg = value === "x" ? <SvgComponent name="x" width="40" height="40"/>
												: <SvgComponent name="o" width="40" height="40"/>;

	const squareLightWin = lightWin.includes(+id) ? `game__grid__square game__grid__square--${value}WinActive`
																	: "game__grid__square";

	const hoverMark = markTurn === 'x' ? <SvgComponent name="xOutline" width="40" height="40"/>
														: <SvgComponent name="oOutline" width="40" height="40"/>;

	return (
		<div className={squareLightWin} onMouseEnter={() => setSeeHoverMark(true)} onMouseLeave={() => setSeeHoverMark(false)} id={id} onClick={onClick}>
			{value === null ? (seeHoverMark ? hoverMark : null) : valueSvg}
		</div>
	)
}