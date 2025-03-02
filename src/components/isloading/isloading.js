import styles from "./isloading.module.css";

export const IsLoading = () => (
	<div className={styles.preloader}>
		<div className={styles.loader}>
			<div className={styles.smoke}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={styles.cup}>
				<div className={styles.body}></div>
				<div className={styles.plate}></div>
				<div className={styles.hand}></div>
			</div>
		</div>
	</div>
);
