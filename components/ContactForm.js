import React from "react";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
	return (
		<form
			action="/success"
		  data-netlify="true"
		  className={styles.form}
			name="contact"
			method="POST">
			<h1>
				Let's work <span className={styles.gradientText}>together</span>
			</h1>
			<input type="hidden" name="form-name" value="contact" />
			<label htmlFor="firstName" value="First Name" />
			<input type="text" name="firstName" id="firstName" placeholder="First Name" />
			<label htmlFor="lastName" value="Last Name"/>
			<input type="text" name="lastName" id="lastName" placeholder="Last Name" />
			<label htmlFor="email" value="Email"/>
			<input type="email" name="email" id="email" placeholder="Email"/>
			<label htmlFor="phone" value="Phone"/>
			<input type="tel" name="phone" id="phone" placeholder="Phone"/>
			<label htmlFor="message" value="Message"/>
			<textarea name="message" id="message" placeholder="What can I do for you?"/>
			<button type="submit">Send ✉️</button>
		</form>
	);
}
