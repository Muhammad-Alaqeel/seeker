import React, { useState } from 'react';
import "./Question.css"
function Questions(props) {
	// <HomePage />
 
	// const questions = ["how ", "why", "when"]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
 let levelOfknowledge;
 let suggString= 'The suggested sourse for you is ';
 let suggestedCourse;

 // new empty line
 function NewlineText(props) {
	const text = props.text;
	return <div>{text}</div>;
  }

  // level of knowledge
  const getResult = (score) => {
		if(score === 0){
			levelOfknowledge = 'biggener. ';
			suggestedCourse = 'JAVA from zero'
			return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;

	   }else if (score === 1) {
		levelOfknowledge = 'medium.';
		suggestedCourse = 'functions of JAVA'
		return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;
	   } else {
		levelOfknowledge = 'expert.';
		suggestedCourse = 'JAVA hero.'
		return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;
	   }
};
  
	const handleAnswerOptionClick = () => {
	
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 3) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
      
		}
    

	};

	// if(score === 0){
	// 	txt.replace('Your level is biggener') 
	//    }else if (score === 1) {
	// 	txt.replace('Your level is mideum')  
	//    } else {
	// 	txt.replace('Your level is expert ') 
	//    }
	return (
		
		<div className='app'>
			{/* <HomePage /> */}
			{showScore ? (
				<div className='score-section' >
				<br />
					You scored ({score}) out of 3. <br /><br />
					You scored ({score}) out of 3. <br /><br />
					You scored ({score}) out of 3. <br /><br />

          <button>Submit</button>
          
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/3
						</div>
						<div className='question-text'>{props.questions[currentQuestion]}</div>
					</div>
					<textarea  placeholder='Right what you know' ></textarea>
				<div className='answer-section'>
					
							<button onClick={() => handleAnswerOptionClick()}>Next</button>
						     
					</div>
				</>
			)}
		</div>
	);
}
export default Questions;
