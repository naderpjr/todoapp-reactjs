import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {

    let todos = [
        'Go to the gym',
        'Go to the supermarket',
        'Go to the park',
    ]

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>

                )
            })}
        </ul>
    )
}

export default TodoList