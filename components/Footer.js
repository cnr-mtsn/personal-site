import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/cnr-mtsn">
				<Image height="40" width="40" src="/githubLight.png" />
			</a>
		</footer>
	);
}
