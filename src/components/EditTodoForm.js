import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' value={value} placeholder='Update task'  onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}

export default EditTodoForm
