import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <div className={styles.todo_list_container}>
            {!todos.length && <h3>Todo List is empty</h3>}
            {todos.map((todo) =>
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            )}
        </div>
    );
}

export default TodoList;
