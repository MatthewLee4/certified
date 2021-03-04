import React,{useState} from 'react'
import MenuAppBar from './Header'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Quiz from './Quiz'
import Result from './Results'

//const [newAnswers,setNewAnswers] = useState([]);
let quizQuestions = []

function SelectedQuiz(props) {

    componentDidMount = () => {
        const shuffledAnswerOptions = quizQuestions.map(question =>
          this.shuffleArray(question.answers)
        );
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: shuffledAnswerOptions[0]
        });
      }

    return (
        <div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
    )
}


axios.get(`https://opentdb.com/api.php?amount=10&category=${props.test.testCategory}&difficulty=medium&type=multiple`) 
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

handleAnswerSelected = (event) => {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

setUserAnswer = (answer) => {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults =() => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  renderResult = () => {
    return <Result quizResult={this.state.result} />;
  }

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }



  const mapStateToProps = (state,ownProps) => {
    return {
        test: state.testCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatedScore: payload => {
            dispatch(updatedScore(payload))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(SelectedQuiz)
//export default SelectedQuiz

