import React, {Fragment, useState} from "react"; 
import "../style.css"; 

// Function to question inside our app 
const QuestionBox = ({ question, options, selected}) => { 
const [answer, setAnswer] = useState(options);
 
return (
	<>
	{question?
	<div className="questionBox"> 
		<div className="question">{question}</div> 
		{answer?answer.map((text, index) => ( 
		<button 
			key={index} 
			className="answerBtn"
			onClick={()=>{ 
					setAnswer(); 
					selected(text); 
				}}> {text} 
		</button> 
		)):null} 
	</div> 
	:null
	}
 </>)
}; 

export default QuestionBox; 
