import React from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {

	return (
		<form
			action="/success"
			data-netlify="true"
			className={styles.form}
			name="contact"
			method="POST">
			<input type="hidden" name="form-name" value="contact" />
			<label htmlFor="firstName">
				First Name:
			</label>
			<input type="text" name="firstName" id="firstName" />
			<label htmlFor="lastName">
				Last Name:
			</label>
			<input type="text" name="lastName" id="lastName" />
			<label htmlFor="email">
				Email:
			</label>
			<input type="email" name="email" id="email" />
			<label htmlFor="phone">
				Phone:
			</label>
			<input type="tel" name="phone" id="phone" />
			<label htmlFor="message">
				Message:
			</label>
			<textarea name="message" id="message" />
			<button type="submit">Send ✉️</button>
		</form>
	);
}
