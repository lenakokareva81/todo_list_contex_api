import styles from "./create-new-todo.module.css";
import { InputForm } from "../inputForm/input-form";
import { use } from "react";
import { AppContext } from "../../context";
import { useState } from "react";

export const СreateNewTodo = ({}) => {
	const [newTitle, setNewTitle] = useState("");

	const { createTodo } = use(AppContext);

	const submit = () => {
		console.log(newTitle);
		createTodo(newTitle);
	};
	return (
		<>
			<div className={styles.taskList}>
				<div className={styles.addTask}>
					<InputForm
						placeholder="Add New Todo"
						setNewTitle={setNewTitle}
						title={newTitle}
						onClick={submit}
						className={`${styles.submitTask}`}
					/>
				</div>
			</div>
		</>
	);
};

// `${styles.submitTask}``${styles.submitTaskDisable}`
