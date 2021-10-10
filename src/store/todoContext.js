import React from 'react'

const TodoContext = React.createContext({
    editTodoHandler: () => {},
    deleteTodoHandler: () => {}
})

export default TodoContext;