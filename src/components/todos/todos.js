import styles from "./todos.module.css";
import { sortAlphabet } from "../utils";
import { Todo } from "../todo/todo";

export const Todos = ({
	isLoading,
	deleteTodo,
	completeTodo,
	setIsCreating,
	changeIdTodo,
	changeTodo,
	setChangeTodo,
	setChangeIdTodo,
	searchTodo,
	isAlphabet,
}) => {
	return (
		<>
			<ul className={styles.taskList}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					sortAlphabet(isAlphabet)
						.filter(({ id, title, completed }) => {
							if (
								searchTodo.length > 3 &&
								title.includes(searchTodo)
							) {
								return { id, title, completed };
							}
							if (searchTodo.length <= 3) {
								return { id, title, completed };
							}
						})
						.map(({ id, title, completed }) => (
							<Todo
								key={id}
								changeIdTodo={changeIdTodo}
								id={id}
								completed={completed}
								setChangeTodo={setChangeTodo}
								setIsCreating={setIsCreating}
								title={title}
								changeTodo={changeTodo}
								deleteTodo={deleteTodo}
								completeTodo={completeTodo}
								setChangeIdTodo={setChangeIdTodo}
							></Todo>
						))
				)}
			</ul>
		</>
	);
};
