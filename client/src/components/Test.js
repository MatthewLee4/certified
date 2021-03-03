// import React from 'react';
// import MenuAppBar from './Header'
// import Card from '@material-ui/core/Card';
// import { Grid } from '@material-ui/core';
// const axios = require('axios');

// const Test = () => {
//     let answers = {};
//     return (
//         <Grid container justify="center" className={classes.icons}>
//           <Box m={1} pt={1}>
//             <Card className={classes.root}>
//               <CardContent>
//                 <Typography
//                   className={classes.title} 
//                   color="textSecondary"
//                   gutterBottom
//                 >
//                   Question
//                 </Typography>
//                 <Typography variant="h5" component="h2">
//                   {bull} blahblahblahblahblahblahblahblahblah
//                 </Typography>
//                 <Typography variant="h5" component="h2">
//                   {bull} blahblahblahblahblahblahblahblah
//                 </Typography>
//                 <Typography variant="h5" component="h2">
//                   {bull} Answer3blahblahblahblahblahblah
//                 </Typography>
//                 <Typography variant="h5" component="h2">
//                   {bull} Answer4blahblahblahblahblahblah
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="large">Submit</Button>
//               </CardActions>
//             </Card>
//           </Box>
//         </Grid>
//       );
// };

// fetchTest = (props) => {

//     axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple")
//     .then(
//         async(response) => {
//             mapQuestions(response.data)
//        }
//     )
// }

// mapQuestions = (currentQuestion) => {

//     currentQuestion.array.forEach(element => {
//         // this needs to map to questions portion of card
//         // adding correct and incorrect answers to array with boolean for true or false, 
//         //on submit we will check this to make sure the answer is correct
//         if(element.results.correct_answer != null) {
//             answers.push(element.results.correct_answer) 
//         }
        
//     });
// }

// export default Test;

// // {
// //     "category": "Sports",
// //     "type": "multiple",
// //     "difficulty": "medium",
// //     "question": "At which bridge does the annual Oxford and Cambridge boat race start?",
// //     "correct_answer": "Putney",
// //     "incorrect_answers": [
// //         "Hammersmith",
// //         "Vauxhall ",
// //         "Battersea"
// //     ]
// // }
