import React from 'react'
import styles from '../styles/Footer.module.css'
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/cnr-mtsn">
				Conner Matson | <span id="github-logo">🖥️</span>
			</a>
		</footer>
	);
}
