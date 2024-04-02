import Avatar from "./Avatar";
import "./App.css";

function App() {
	return (
		<>
			<Avatar
				className="avatar"
				size={90}
				person={{
					name: "Gregorio Y. Zara",
					imageId: "7vQD0fP",
				}}
			/>
			<Avatar
				className="avatar"
				size={40}
				person={{
					name: "Gregorio Y. Zara",
					imageId: "7vQD0fP",
				}}
			/>
		</>
	);
}

export default App;
