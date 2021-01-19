import { Component } from "react";
import { URL } from "../constants/url";
import styles from "../styles/signup.module.css";

class Signup extends Component {
	state = {
		alertMessage: "",
	};

	validation = (email, password, cpassword) => {
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
		if (cpassword === "") {
			this.setState({ alertMessage: "Enter a password again" });
			setTimeout(() => {
				this.setState({ alertMessage: "" });
			}, 2000);
			return false;
		}
		if (password !== cpassword) {
			this.setState({
				alertMessage:
					"Password doesn't match. Please check and enter again.",
			});
			setTimeout(() => {
				this.setState({ alertMessage: "" });
			}, 2000);
			return false;
		}
		return true;
	};

	signUp = (event) => {
		event.preventDefault();
		if (
			!this.validation(
				event.target.email.value.trim(),
				event.target.password.value.trim(),
				event.target.cpassword.value.trim()
			)
		) {
			return false;
		}
		const addData = {
			email: event.target.email.value.trim(),
			password: event.target.password.value.trim(),
			cpassword: event.target.cpassword.value.trim(),
		};

		fetch(`${URL}/users/signin`, {
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
				if (data.status === "Unsucessful") {
					this.setState({ alertMessage: data.message });
					setTimeout(() => {
						this.setState({ alertMessage: "" });
					}, 2000);
					return false;
				}
				this.setState({ alertMessage: data.status });
				setTimeout(() => {
					this.setState({ alertMessage: "" });
					this.props.history.push("/login");
				}, 2000);
			})
			.catch((err) => {
				console.log("Error", err);
			});
	};
	render() {
		return (
			<div>
				<h1>Signup Page</h1>
				<p className={styles["alert"]}>{this.state.alertMessage}</p>
				<form onSubmit={this.signUp}>
					<div className={styles["register"]}>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className={styles["register"]}>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div className={styles["register"]}>
						<label htmlFor="cpassword">Confrm Password</label>
						<input type="password" name="cpassword" id="cpassword" />
					</div>
					<div className={styles["button"]}>
						<button className={styles["submit"]}>Submit</button>
						<button className={styles["reset"]} type="reset">
							Reset
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default Signup;
