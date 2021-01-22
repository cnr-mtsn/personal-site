import React from "react";
import { PageWrapper } from "../utils/style";
import ContactForm from '../components/ContactForm';
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
				<ContactForm/>
			</Container>
		</PageWrapper>
	);
}
