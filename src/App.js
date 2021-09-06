import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import Content from "./components/Content";
import ViewAll from "./components/ViewAll";

function App() {
	return (
		<EasybaseProvider ebconfig={ebconfig}>
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/content/:index" component={Content} />
						<Route exact path="/Contact" component={Contact} />
						<Route exact path="/Contact/allforms" component={ViewAll} />
					</Switch>
				</div>
			</Router>
		</EasybaseProvider>
	);
}

export default App;
