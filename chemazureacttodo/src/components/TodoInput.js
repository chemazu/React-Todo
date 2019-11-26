import React, { Component } from 'react'

export class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            todoitem:''
        }
    }
    inputValue =(e)=>{
        this.setState({todoitem:e.target.value}) // send the value of the text field to state
    }
    submitTodo =(e)=>{                           // takes the value passed above and console logs it 
        e.preventDefault();                     // Prevents the Default function of a form where it reloads the page on submit
        this.props.addTodo(this.state.todoitem) // this passes the title upwards
        this.setState({todoitem:''})            // sets the todoitem back to empty
        //if (this.state.todoitem) {console.log(this.state.todoitem)} // REMOVE THE IF  STATEMENT
        //else console.log('input a todo')
        
    }
    render() {
        return (
            <div>
                <form onSubmit = { this.submitTodo} >
                    <input type = 'text' onChange = {this.inputValue}></input>
                    <button >Add Todo</button>
                </form>
            </div>
        )
    }
}
export default TodoInput
