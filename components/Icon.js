import React from "react";
import styles from "../styles/Icon.module.css";

export default function Icon({ emoji, text }) {
	return (
		<p className={styles.text}>
			<span className={styles.icon}>{emoji}</span>
			{text}
		</p>
	);
}
