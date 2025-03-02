import styles from "./button-sort.module.css";
import { use } from "react";
import { AppContext } from "../../context";

export const ButtonSort = () => {
	const { isSorted, setIsSorted } = use(AppContext);
	return (
		<>
			<div className={styles.buttonsContainer}>
				<button
					className={
						isSorted
							? `${styles.buttonArounder} ${styles.buttonArounderPush}`
							: `${styles.buttonArounder}`
					}
					onClick={() => setIsSorted(!isSorted)}
				>
					А-Я
				</button>
			</div>
		</>
	);
};
