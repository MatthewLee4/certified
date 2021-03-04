import './App.css';
import 'fontsource-roboto';
import React, { Component } from 'react';
import AppRouter from './AppRouter';

//react router dom
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

       

export default App;