import {useState} from "react";
import styles from './TodoForm.module.css';

function TodoForm({addTodo}) {
    const [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={onSubmitHandler} className={styles.todo_form}>
            <input placeholder='Enter new Todo' value={text} onChange={(e) => setText(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default TodoForm;