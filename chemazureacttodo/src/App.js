import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export class App extends Component {
  constructor(){
    super()
    this.state={
      todos : []
    }
  }
  // ADD A TODO
  addTodo =(todoitem)=>{
    const newTodo =
    { id : 'orange juwice',
      Title: todoitem,
      completed:false,
    }
    this.setState({todos:[newTodo,...this.state.todos]},()=>{console.log(this.state.todos)})
  }
  render() {

    return (
      <React.Fragment>
        <TodoInput addTodo = {this.addTodo}/>
        <TodoList todos ={this.state.todos} />
      </React.Fragment>
    )
  }
}

export default App
