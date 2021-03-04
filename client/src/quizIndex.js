import React ,{ Component } from "react";
// import ReactDOM from "react-dom";
import "./style.css";
import questionAPI from './components/indexapi';
import QuestionBox from "./components/Questions";
import Result from './components/Results';
const axios = require('axios')

class Quiz extends Component {
          constructor(){
              super();
              this.state = {
                questionBank:[],
                score:0,
                responses:0
              };
        }

      getQuestions = () => {
        questionAPI().then(question => {
          this.setState({
            questionBank: question
          });
        });
      };

      playAgain = () =>{
        axios.get(`https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`)
        .then((response) => {
          // handle success
          let quizQuestions = []
          console.log("AJD1" + JSON.stringify(response.data.results))
          let answers = (response.data.results);
          for (let index = 0; index < answers.length; index++) {
              let answersArray = [];
              let correct = '';
              answersArray.push(answers[index].correct_answer)
              correct = answers[index].correct_answer;
              for(let i = 0; i < answers[index].incorrect_answers.length;i++) {
                  answersArray.push(answers[index].incorrect_answers[i])
              }
              quizQuestions.push({question:answers[index].question,answers:answersArray},correct)
        }
          this.setState({
            ...this.state,
            questionBank: quizQuestions 
          })
        })
          .catch(function (error) {
          // handle error
          console.log(error);
          }) 
        //this.getQuestions();
        this.setState({
          score:0,
          responses: 0
        });
      };

      computeAnswer = (answer,correctAns) => {
        if (answer === correctAns){
          console.log('AJD' + answer)
          console.log('AJD' + correctAns)
          this.setState({
             score: this.state.score + 1
          });
        }
        this.setState({
          responses: this.state.responses < 10 ? this.state.responses+1 : 10
        });
      };

      componentDidMount(){
        axios.get(`https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`)
        .then((response) => {
          // handle success
          let quizQuestions = []
          console.log("AJD1" + JSON.stringify(response.data.results))
          let answers = (response.data.results);
          for (let index = 0; index < answers.length; index++) {
              let answersArray = [];
              let correct = '';
              answersArray.push(answers[index].correct_answer)
              correct = answers[index].correct_answer;
              for(let i = 0; i < answers[index].incorrect_answers.length;i++) {
                  answersArray.push(answers[index].incorrect_answers[i])
              }
              quizQuestions.push({question:answers[index].question,answers:answersArray},correct)
        }
          this.setState({
            ...this.state,
            questionBank: quizQuestions 
          })
        })
          .catch(function (error) {
          // handle error
          console.log(error);
          }) 
        //this.getQuestions();  
      }

    render(){
      return(
        <div className="container">
          <div className="title">
             Let's Get Certified ! ! !
          </div>

          { this.state.questionBank.length > 0 &&
            this.state.responses < 5 &&
             this.state.questionBank.map(
               ({question, answers, correct}) => <QuestionBox key={question}
                                                                                         question={question}
                                                                                          options={answers}
                                                                                           selected={answer => this.computeAnswer(answer,correct) }/>)
          }

          {this.state.responses === 10 ? (<Result  score={this.state.score}
                                                                      playAgain={this.playAgain}
                                                                      />) :null}

        </div>
      )
    }
  }

export default Quiz;
