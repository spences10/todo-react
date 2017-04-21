import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <form>
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo}/> 
          </form>
          <div className="todo-app">
            <ul>
              {/*reference the constructor*/}
              {this.state.todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                </li>)}              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
