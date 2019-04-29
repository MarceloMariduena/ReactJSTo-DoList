import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Task from './components/Task';
import Footer from './components/Footer';

class App extends Component {
  // Default state 
  state = {
    newTask: "",
    myTasks: [],
    error: ""
  };

  // This function adds a task into the App's state
  newTask = (e) => {
    this.setState({
      newTask: e.target.value,
      error: ""
    });
  };
  
  addnewTask = (e) => {
    e.preventDefault();
    if (this.state.newTask === "") {
      this.setState({ error: "true" });
    } else 
      this.setState(preState => preState.myTasks.push(this.state.newTask));
    
    this.setState({
      newTask: ""
    });
  };

  removeTask = (index) => {
    this.setState({
      myTasks: [
        ...this.state.myTasks.slice(0, index),
        ...this.state.myTasks.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Header title="To-Do"/>
        <Form placeholder="Enter task here..."
          input={this.newTask}
          addTask={this.addnewTask}
          value={this.state.newTask}
          error={this.state.error}
        />
        <ul className="list-group mt-2">
          {this.state.myTasks.map((t, index) => (
            <Task key={index} task={t} remove={() => this.removeTask(index)} />
          ))}
        </ul>
        <Footer author="Marcelo Mariduena" link="https://github.com/marcelomariduena"/>
      </div>
    );
  }
}

export default App;
