import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookies";
import { URL } from "../constants/url";
import styles from "../styles/login.module.css";

class Login extends Component {
	state = {
		alertMessage: "",
	};
	validation = (email, password) => {
		if (email === "") {
			this.setState({ alertMessage: "Enter an email id" });
			setTimeout(() => {
				this.setState({ alertMessage: "" });
			}, 2000);
			return false;
		}
		if (password === "") {
			this.setState({ alertMessage: "Enter a password" });
			setTimeout(() => {
				this.setState({ alertMessage: "" });
			}, 2000);
			return false;
		}
		return true;
	};

	login = (event) => {
		event.preventDefault();
		if (
			!this.validation(
				event.target.email.value.trim(),
				event.target.email.value.trim()
			)
		) {
			return false;
		}

		const addData = {
			email: event.target.email.value.trim(),
			password: event.target.password.value.trim(),
		};

		fetch(`${URL}/users/login`, {
			method: "post",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({ ...addData }),
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (data.status === "Unsuccessful") {
					this.setState({ alertMessage: data.message });
					setTimeout(() => {
						this.setState({ alertMessage: "" });
					}, 2000);
					return false;
				}
				Cookies.setItem("jwt", data.data[0]["jwt"]);
				this.props.history.push("/");
			})
			.catch((err) => {
				console.log("Error", err);
				return err;
			});
	};
	signUp = () => {
		this.props.history.push("/signup");
	};

	render() {
		return (
			<div className={styles["login-box"]}>
				<h1>Login Page </h1>
				<p className={styles["alert"]}>{this.state.alertMessage}</p>
				<form onSubmit={this.login}>
					<div className={styles["login"]}>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className={styles["login"]}>
						<label htmlFor="password">Password</label>
						<input type="password" name="pasword" id="password" />
					</div>
					<div className={styles["login-button"]}>
						<button className={styles["submit"]}>Submit</button>
						<button className={styles["reset"]} type="reset">
							Reset
						</button>
					</div>
					<div className={styles["register"]}>
						<Link to="/signup" className={styles["registration"]}>
							Not Registered ?
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
export default Login;
