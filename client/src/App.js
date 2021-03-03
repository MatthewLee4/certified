import './App.css';
import 'fontsource-roboto';
import AppRouter from './AppRouter';

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
    //timer: 0,
    result: ''
  };
}
  //this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
}



//react router dom
function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}         

export default App;