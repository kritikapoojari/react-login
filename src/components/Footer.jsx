import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

export default function Footer() {
	return (
		<footer>
			<div>
				<div className={styles["content"]}>
					<Link to="/">
						<p className={styles["text"]}>
							Copyright 2021 All Rights Reserved
						</p>
					</Link>
				</div>
				<div className={styles["links"]}>
					<ul className={styles["image"]}>
						<li className={styles["logo"]}>
							<img
								src="https://img.icons8.com/carbon-copy/64/000000/facebook-new.png"
								alt="facebook"
							/>
						</li>
						<li className={styles["logo"]}>
							<img
								src="https://img.icons8.com/carbon-copy/100/000000/github.png"
								alt="github"
							/>
						</li>
						<li className={styles["logo"]}>
							<img
								src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png"
								alt="linkedin"
							/>
						</li>
						<li className={styles["logo"]}>
							<img
								src="https://img.icons8.com/carbon-copy/100/000000/instagram-new.png"
								alt="instagram"
							/>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
