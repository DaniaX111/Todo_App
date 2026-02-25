import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
    return (
        <div>
            <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
                <h3>{todo}</h3>
            </div>
        </div>
    );
}

export default Todo;