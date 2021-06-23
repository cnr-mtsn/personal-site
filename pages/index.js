import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeHero from "../components/HomeHero"

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>
				Hi, I'm <span className={styles.gradientText}>Conner Matson</span> 👋🏼
			</h1>
			<HomeHero />
		</div>
	);
}
