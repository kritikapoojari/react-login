import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookies";
import styles from "../styles/navigation.module.css";

function Navigation(props) {
	const logout = () => {
		Cookies.removeItem("jwt");
		props.history.push("/login");
	};
	const signUp = () => {
		props.history.push("/signup");
	};
	const login = () => {
		props.history.push("/login");
	};

	return (
		<nav>
			<Link to={"/"}>
				<img
					src="https://img.icons8.com/doodle/48/000000/employee-card--v1.png"
					alt="logo"
				/>
			</Link>
			{props.location.pathname === "/signup" ? (
				<button onClick={login} className={styles["button"]}>
					Login
				</button>
			) : props.location.pathname === "/login" ? (
				<button onClick={signUp} className={styles["button"]}>
					Singup
				</button>
			) : (
				<button onClick={logout} className={styles["button"]}>
					Logout
				</button>
			)}
		</nav>
	);
}

export default withRouter(Navigation);
