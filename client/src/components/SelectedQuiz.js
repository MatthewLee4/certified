import React,{useState} from 'react'
import PropTypes from 'prop-types'

const [newAnswers,setNewAnswers] = useState([]);

function SelectedQuiz() {
    return (
        <div>
            
        </div>
    )
}

fetch(
    'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

export default SelectedQuiz

// {
//     question: "A stimpmeter measures the speed of a ball over what surface?,
//     answers: [
//         {
//             type: "Golf Putting Green",
//             content: "true"
//         },
//         {
//             type: "Football Pitch",
//             content: "false"
//         },
//         {
//             type: "Cricket Outfield",
//             content: "false"
//         },
//         {
//             type: "Pinball Table",
//             content: "false"
//         }
//     ]
// },

