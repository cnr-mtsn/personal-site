import React from "react";
import Head from "next/head";
import styles from "../styles/Page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Page({ children }) {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<Head>
				<title>
					Conner Matson |{" "}
					{router.pathname.substring(1, 2).toUpperCase() +
						router.pathname.substring(2, router.pathname.length) || "Home"}
				</title>
				<meta name="description" content="My personal development portfolio" />
				<link rel="icon" href="/logo.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
			</Head>

			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
