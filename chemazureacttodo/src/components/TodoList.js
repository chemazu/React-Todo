// This Maps through the Todos App.js
import React, { Component } from 'react'


class TodoList extends Component {
    render() {
        //const TodoList = this.props.todos.map((todo)=> ( <h1>{todo.title}</h1>))
        return (
                <div>{this.props.todos.map((todo)=> ( <h1>{todo.Title}</h1>))}
                hi</div>
        )
    }
}

export default TodoList
