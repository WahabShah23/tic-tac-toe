import { useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));

	return (
		<div className="App">
			<h1>Tic Tac Toe</h1>
			<Box className="board" sx={{ display: "flex", flexDirection: "column" }}>
				<Box className="row"></Box>
				<Box className="row"></Box>
				<Box className="row"></Box>
			</Box>
		</div>
	);
}

export default App;
