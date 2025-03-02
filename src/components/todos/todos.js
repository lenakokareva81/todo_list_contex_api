import styles from "./todos.module.css";
import { Todo } from "../todo/todo";
import { use } from "react";
import { AppContext } from "../../context";
import { searchTodos } from "../../utils";

export const Todos = () => {
	const { todos, searchPhrase } = use(AppContext);

	return (
		<>
			<ul className={styles.taskList}>
				{searchTodos(todos, searchPhrase).map(
					({ id, title, completed }) => (
						<Todo
							key={id}
							id={id}
							completed={completed}
							title={title}
						/>
					),
				)}
			</ul>
		</>
	);
};

// ;
