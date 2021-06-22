import React from "react";
import ContactForm from "../components/ContactForm";
import styles from '../styles/ContactForm.module.css'

export default function contact() {
	return (
		<div>
			<h1>Let's work <span className={styles.gradientText}>together</span></h1>
			<ContactForm/>
		</div>
	);
}
