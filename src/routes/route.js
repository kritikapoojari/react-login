import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default Router;
