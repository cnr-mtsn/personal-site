import React from 'react'
import styles from '../styles/ContactForm.module.css'

export default function ContactForm({target}) {
	console.log(target)
	return (
		<form
			netlify-honeypot="bot-field"
			action="/success"
			data-netlify="true"
			className={styles.form}
			name="contact"
			method="POST">
			<input type="hidden" name="form-name" value="contact" />
			<label>
				Don’t fill this out if you’re human: <input name="bot-field" />
			</label>
			<label htmlFor="firstName">
				First Name: <input type="text" name="firstName" id="firstName" />
			</label>
			<label htmlFor="lastName">
				Last Name: <input type="text" name="lastName" id="lastName" />
			</label>
			<label htmlFor="email">
				Email: <input type="email" name="email" id="email" />
			</label>
			<label htmlFor="phone">
				Phone: <input type="tel" name="phone" id="phone" />
			</label>
			<label htmlFor="message">
				Message: <textarea name="message" id="message" />
			</label>
			<button type="submit">Send ✉️</button>
		</form>
	);
}
