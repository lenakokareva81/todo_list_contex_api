import styles from "./searchTodo.module.css";
import { InputForm } from "../inputForm/input-form";
import { use } from "react";
import { AppContext } from "../../context";

export const SearchTodo = () => {
	const { searchPhrase, setSearchPhrase } = use(AppContext);

	return (
		<>
			<div className={styles.addTask}>
				<InputForm
					placeholder="Search Todo"
					title={searchPhrase}
					setNewTitle={setSearchPhrase}
					onClick={() => setSearchPhrase(searchPhrase)}
					className={`${styles.searchTask}`}
				/>
			</div>
		</>
	);
};
