import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Login } from "./components/integrate";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/*" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
