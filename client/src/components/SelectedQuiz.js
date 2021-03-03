import React,{useState} from 'react'
import PropTypes from 'prop-types'

const [newAnswers,setNewAnswers] = useState([]);
let quizQuestions = []

function SelectedQuiz() {
    
    return (
        <div>
        <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />         
        </div>
    )
}



axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple') 
    .then(
        async (response) => {
            mapAnswers(JSON.parse(JSON.stringify(response.data.results)))
        }
    )

mapAnswers = (answers) => {

    for (let index = 0; index < answers.length; index++) {
        let answersArray = [];
        answersArray.push({answer:answers[index].correct_answer,correct: true})
        for(let i = 0; i < answers[index].incorrect_answers.length;i++) {
            answersArray.push({answer:answers[index].incorrect_answers[i],correct: false})
        }
        quizQuestions.push({question:answers[index].question,answers:answersArray})
        
        console.log(quizQuestions)
    }
};

shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

export default SelectedQuiz

