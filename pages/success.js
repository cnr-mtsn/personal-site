import React from "react";
import styles from "../styles/Success.module.css";

export default function success() {
	return (
		<div className={styles.container}>
			<iframe
				src="https://giphy.com/embed/l378uHisF00ugOA36"
				frameBorder="0"
				width="480"
				height="260"
				class="giphy-embed"
				allowFullScreen></iframe>
			<h1>Message Sent! 😄</h1>
		</div>
	);
}
