import { useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import SquareTile from "./Components/SquareTile";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));

	const selectSquareTile = (square) => {};

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
				<Box className="row"></Box>
				<Box className="row"></Box>
			</Box>
		</div>
	);
}

export default App;
