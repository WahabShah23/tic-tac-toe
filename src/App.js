import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import SquareTile from "./Components/SquareTile";
import { WinningPattern } from "./WinningPattern.js";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState({ winner: "none", state: "none" });

	useEffect(() => {
		checkWinner();
	}, [board]);

	useEffect(() => {
		if (winner.state != "none") {
			alert(`${winner.winner} won!`);
			setBoard(Array(9).fill(null));
			setPlayer("X");
		}
	}, [winner]);

	const selectSquareTile = (square) => {
		setBoard(
			board.map((item, index) => {
				if (index === square && item == null) {
					return player;
				}
				return item;
			})
		);
		player === "X" ? setPlayer("O") : setPlayer("X");
	};

	const checkWinner = () => {
		WinningPattern.forEach((pattern) => {
			const playerOne = board[pattern[0]];
			if (playerOne === null) return;
			let isWinningPattern = true;
			pattern.forEach((item) => {
				if (board[item] != playerOne) {
					isWinningPattern = false;
				}
			});

			if (isWinningPattern) {
				setWinner({ winner: playerOne, state: "WON" });
			}
		});
	};

	return (
		<div className="App">
			<h1>Tic Tac Toe</h1>
			<Box className="board" sx={{ display: "flex", flexDirection: "column" }}>
				<Box className="row">
					<SquareTile
						value={board[0]}
						selectSquareTile={() => selectSquareTile(0)}
					/>
					<SquareTile
						value={board[1]}
						selectSquareTile={() => selectSquareTile(1)}
					/>
					<SquareTile
						value={board[2]}
						selectSquareTile={() => selectSquareTile(2)}
					/>
				</Box>
				<Box className="row">
					<SquareTile
						value={board[3]}
						selectSquareTile={() => selectSquareTile(3)}
					/>
					<SquareTile
						value={board[4]}
						selectSquareTile={() => selectSquareTile(4)}
					/>
					<SquareTile
						value={board[5]}
						selectSquareTile={() => selectSquareTile(5)}
					/>
				</Box>
				<Box className="row">
					<SquareTile
						value={board[6]}
						selectSquareTile={() => selectSquareTile(6)}
					/>
					<SquareTile
						value={board[7]}
						selectSquareTile={() => selectSquareTile(7)}
					/>
					<SquareTile
						value={board[8]}
						selectSquareTile={() => selectSquareTile(8)}
					/>
				</Box>
			</Box>
		</div>
	);
}

export default App;
