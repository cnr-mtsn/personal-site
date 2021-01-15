import React from "react";
import { PageWrapper } from "../utils/style";
import styled from "styled-components";

const Container = styled.div`
	width: 80%;
	margin: 2rem auto;
	form {
		display: flex;
		flex-direction: column;
	}
	label {
	}
	input {
		height: 2rem;
		margin-bottom: 1rem;
	}
	textarea {
		margin-bottom: 1rem;
		height: 5rem;
	}
	button {
		width: auto;
		align-self: center;
		background: #50b2c0;
		border-radius: 5px;
		color: #2a2829;
		padding: 0.5rem;
    border-color: #fff;
	}
`;
export default function Contact() {
	return (
		<PageWrapper>
			<Container>
				<form name="Contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="Contact" />
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" required />
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="lastName" />
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required />
					<label htmlFor="phone">Phone</label>
					<input type="tel" name="phone" />
					<label htmlFor="message">Message</label>
					<textarea name="message" required />
					<button type="submit">Send Message</button>
				</form>
			</Container>
		</PageWrapper>
	);
}
