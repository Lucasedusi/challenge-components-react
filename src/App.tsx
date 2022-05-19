import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { useState } from "react";

export function App() {
	const [selectedGenreId, setSelectedGenreId] = useState(1);
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<SideBar
				setSelectedGenreId={setSelectedGenreId}
				selectedGenreId={selectedGenreId}
			/>
			<div className="container">
				<Content selectedGenreId={selectedGenreId} />
			</div>
		</div>
	);
}
