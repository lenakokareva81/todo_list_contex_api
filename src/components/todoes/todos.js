import styles from "./todos.module.css";

import { SortAlphabet } from "../../function/sortAlphabet";
import { Todo } from "../todo/todo";

export const Todoes = ({
	todoes,
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
	setIsLoading,
}) => {
	// const onChangeTodo = (id, title, completed) => {
	// 	setChangeIdTodo(id);
	// 	setChangeTodo(title);
	// };
	// const onBlur = (id, changeTodo, completed) => {
	// 	completeTodo({ id, title: changeTodo, completed });
	// 	setChangeIdTodo(0);
	// };
	const sortAlphabet = (todoes, isAlphabet) => {
		if (isAlphabet) {
			return todoes.sort(function (a, b) {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		} else {
			return todoes.sort(function (a, b) {
				if (a.id < b.id) {
					return -1;
				}
				if (a.id > b.id) {
					return 1;
				}
				return 0;
			});
		}
	};
	return (
		<>
			<ul className={styles.taskList}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					sortAlphabet(todoes, isAlphabet)
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
