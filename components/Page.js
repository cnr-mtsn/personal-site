import React from "react";
import Head from "next/head";
import styles from "../styles/Page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import formatPath from "../utils/formatPath";

export default function Page({ children }) {

	const router = useRouter();
	const path = formatPath(router.pathname);

	return (
		<div className={styles.container}>
			<Head>
				<title>
					Conner Matson | {path}
				</title>
				<meta name="description" content="My personal development portfolio" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
				<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
				<link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192"/>
				<link rel="icon" type="image/png" href="/android-chrome-512x512.png" sizes="512x512"/>
				<link rel="shortcut icon" href="/favicon.ico"/>
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
