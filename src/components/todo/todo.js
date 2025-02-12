import styles from "./todo.module.css";
import { Input } from "../input/input";

export const Todo = ({
	changeIdTodo,
	id,
	completed,
	setChangeTodo,
	setIsCreating,
	setChangeIdTodo,
	title,
	changeTodo,
	deleteTodo,
	completeTodo,
}) => {
	const onCompleteTodo = (id, title, completed) => {
		completeTodo({ id, title, completed: !completed });
	};
	const onDeleteTodo = (id) => {
		deleteTodo((id = { id }));
	};
	const onChangeTodo = (id, title, completed) => {
		setChangeIdTodo(id);
		setChangeTodo(title);
	};
	const onBlur = (id, changeTodo, completed) => {
		completeTodo({ id, title: changeTodo, completed });
		setChangeIdTodo(0);
	};
	return (
		<>
			(
			{changeIdTodo === id ? (
				<form onSubmit={() => onBlur(id, changeTodo, completed)}>
					<Input
						todo={changeTodo}
						setTodo={setChangeTodo}
						setIsCreating={setIsCreating}
						onBlur={() => onBlur(id, changeTodo, completed)}
					></Input>
				</form>
			) : (
				<li className={styles.taskListItem}>
					<label className={styles.taskListItemLabel}>
						<input
							type="checkbox"
							checked={completed}
							onClick={() => onCompleteTodo(id, title, completed)}
						></input>

						<span>{title}</span>
					</label>

					<div className={styles.containerBtn}>
						<span
							className={styles.deleteBtn}
							title="Delete Task"
							onClick={() => onDeleteTodo(id)}
						></span>
						<span
							className={styles.editBtn}
							title="edit Task"
							onClick={() => onChangeTodo(id, title, completed)}
						></span>
					</div>
				</li>
			)}
			)
		</>
	);
};
