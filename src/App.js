import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import { TodoForm, TodoList } from './components/todo'

class App extends Component {
  // to render dynamically need to add state by adding constructior
  constructor(){
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build Awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="todo-app">
          <TodoForm 
            handleInputChange={this.handleInputChange} 
            currentTodo={this.state.currentTodo}
          />
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
