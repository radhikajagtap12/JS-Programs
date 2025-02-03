import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const ThemeComponent = () => {
	const theme = useContext(ThemeContext);

	return <h1>Current Theme {theme}</h1>;
};

const App = () => {
	return (
		<ThemeContext.Provider value="dark">
			<ThemeComponent />
		</ThemeContext.Provider>
	);
};

export default App;
