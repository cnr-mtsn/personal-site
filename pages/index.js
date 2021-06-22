import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import HomeHero from "../components/HomeHero";
export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
			</Head>

			<div className={styles.container}>
				<h1>
					Hi, I'm <span className={styles.gradientText}>Conner Matson</span> 👋🏼
				</h1>
				<HomeHero />
			</div>
		</>
	);
}
