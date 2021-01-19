import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookies";
import Dummy from "./Dummy";
//styles

export default class Home extends Component {
	state = {
		isAuthenticated: Cookies.getItem("jwt") ? true : false,
	};
	render() {
		return (
			<>
				{this.state.isAuthenticated ? (
					<div>
						<Dummy />
					</div>
				) : (
					<Redirect to={{ pathname: "/login" }} />
				)}
			</>
		);
	}
}
