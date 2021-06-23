import React from "react";
import ContactForm from "../components/ContactForm";
import styles from '../styles/ContactForm.module.css'
import Image from 'next/image'

export default function contact() {
	return (
		<div className={styles.container}>
			<Image src="/mail.png" height="300" width="300"/>
			<ContactForm/>
		</div>
	);
}
