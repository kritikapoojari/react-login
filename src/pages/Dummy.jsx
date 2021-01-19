import React, { Component } from "react";
import styles from "../styles/dummy.module.css"

export default class Dummy extends Component {
	render() {
		return (
			<div className={styles["dummy-box"]}>
				<h1>Dummy Page</h1>
				<p>Dummy Page displaying to all the users</p>
				<div className={styles["welcome"]}>
					<img src="https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-600w-1146069941.jpg" alt="welcome" />
				</div>
			</div>
		);
	}
}
