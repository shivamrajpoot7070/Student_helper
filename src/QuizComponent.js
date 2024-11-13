import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&type=multiple');
      const data = await response.json();
      const formattedQuestions = data.results.map((question) => {
        const answerOptions = [
          ...question.incorrect_answers.map((answer) => ({ answerText: answer, isCorrect: false })),
          { answerText: question.correct_answer, isCorrect: true },
        ];
        return {
          questionText: question.question,
          answerOptions: answerOptions.sort(() => Math.random() - 0.5),
        };
      });
      setQuestions(formattedQuestions);
      setLoading(false);
      setShowQuiz(true);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleLearnClick = () => {
    fetchQuestions();
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const handleSubmitClick = () => {
    setShowScore(true);
  };

  const handleRestart = () => {
    setShowQuiz(false);
    setShowScore(false);
    setQuestions([]);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (

    <>

    <br></br>

    <h1 style={{color:"red"}}> Quiz de do yaar</h1>


    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: '#f4f4f4', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {!showQuiz && !showScore && (
        <div>
          <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'red', cursor: 'pointer', margin: '10px 5px' }} onClick={handleLearnClick}>Learn</button>
        </div>
      )}
      {loading && <div>Loading questions...</div>}
      {showQuiz && !showScore && (
        <div>
          <div style={{ marginBottom: '20px' ,color:"Brown"}}>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={{ fontSize: '22px', marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: questions[currentQuestion].questionText }} />
            <div>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} style={{ padding: '10px', margin: '5px', border: 'none', borderRadius: '5px', backgroundColor: 'skyblue', color: 'red', cursor: 'pointer' }} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
          <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: '#fff', cursor: 'pointer', marginTop: '10px' }} onClick={handleSubmitClick}>Submit</button>
        </div>
      )}
      {showScore && (
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
            You scored {score} out of {questions.length}
          </div>
          <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer', marginTop: '20px' }} onClick={handleRestart}>Back to Start</button>
        </div>
      )}
    </div>

    </>
  );
};

export default QuizComponent;
