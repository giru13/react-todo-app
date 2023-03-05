import React from 'react';
import logo from './logo.svg';
import TodoItem from './Components/TodoItem';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
      { id:1, text: 'design project'},
      { id:2, text: 'build web'},
      { id:3, text: 'test project'},
      ], 
      newTodo: '',
      // user: {},
      // date: "31/01"  // this if you wanna add more objects, arrays, date)
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-do-list</h1>
          <ul>
            {this.state.todos.map((todo)=> {
              return (
              <TodoItem key={todo.id} text={todo.text} />
              );
            })}
            {/* {this.todos.map(function(todo){
              return <TodoItem text={todo.text} />;
            })} */}
            </ul>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.newTodo}
            onChange={this.handleChange}/>
            <button type="submit">Search</button>
          </form>
        </header>
      </div>
    );
  }
  
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value});

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState( prevState => ({
      todos: [],
      newTodo: '',
    }));
  }
}

export default App;
