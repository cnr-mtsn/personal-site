import React from "react";
import styles from "../styles/HomeHero.module.css";
import Image from "next/image";
import Icon from "../components/Icon";

export default function HomeHero() {
	return (
		<div className={styles.heroInfo}>
			<Image src="/homeHero.png" height="400" width="400" loading="eager" />
			<div className={styles.inner}>
				<p className={styles.description}>
					I am a <span className={styles.gradientText}>Frontend Developer</span> from Kansas City, MO. I build
					websites for small businesses of all kinds that are:
				</p>
				<br/>
				<br/>
				<Icon emoji={"🚀"} text="Blazingly Fast" />
				<Icon emoji={"📈"} text="SEO Performant" />
				<Icon emoji={"💅🏼"} text="Beautifully Styled" />
				<Icon emoji={"📱"} text="Mobile Optimized" />
			</div>
		</div>
	);
}
