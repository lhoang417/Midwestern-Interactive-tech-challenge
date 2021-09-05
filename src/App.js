import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Contact" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
