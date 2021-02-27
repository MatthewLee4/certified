import React from 'react';
import MenuAppBar from './Header'
import Card from '@material-ui/core/Card';
const axios = require('axios');

const Test = () => {
    return (
        <>
        <MenuAppBar />
        <div>
            <h1>TEST PAGE</h1>
        </div>
        </>
    )
};

fetchTest = (props) => {
    axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
    .then(
        async(response) => {
           mapResponses(response.data)
       }
    )
}


export default Test;

// {
//     "category": "Sports",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "At which bridge does the annual Oxford and Cambridge boat race start?",
//     "correct_answer": "Putney",
//     "incorrect_answers": [
//         "Hammersmith",
//         "Vauxhall ",
//         "Battersea"
//     ]
// }
