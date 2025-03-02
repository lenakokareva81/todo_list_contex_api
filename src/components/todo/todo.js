import styles from "./todo.module.css";
import { InputForm } from "../inputForm/input-form";
import { use } from "react";
import { AppContext } from "../../context";
import { useState } from "react";

export const Todo = ({ id, completed, title }) => {
	const [isChanging, setIsChanging] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const { deletetodo, updateTodo } = use(AppContext);
	const submit = () => updateTodo(id, newTitle, completed);

	return (
		<>
			{isChanging ? (
				<div className={styles.taskList}>
					<div className={styles.addTask}>
						<InputForm
							setNewTitle={setNewTitle}
							title={newTitle}
							onClick={submit}
							className={`${styles.submitTask}`}
						/>
					</div>
				</div>
			) : (
				<li className={styles.taskListItem}>
					<label className={styles.taskListItemLabel}>
						<input
							type="checkbox"
							checked={completed}
							onClick={() => updateTodo(id, title, !completed)}
						></input>

						<span>{title}</span>
					</label>

					<div className={styles.containerBtn}>
						<span
							className={styles.deleteBtn}
							title="Delete Task"
							onClick={() => deletetodo(id)}
						></span>
						<span
							className={styles.editBtn}
							title="edit Task"
							onClick={() => setIsChanging(!isChanging)}
						></span>
					</div>
				</li>
			)}
		</>
	);
};
