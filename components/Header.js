import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
	return (
		<header className={styles.container}>
			<Link href="/">
				<a>
					<Image height="100" width="100" src="/logo.svg" alt="Conner Matson Development" />
				</a>
			</Link>
			<nav className={styles.nav}>
				<ul>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</ul>
			</nav>
		</header>
	);
}