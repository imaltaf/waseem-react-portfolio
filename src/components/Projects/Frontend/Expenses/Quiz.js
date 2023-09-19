import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quizz.css'
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes (10 * 60 seconds)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=50&category=18&difficulty=easy&type=multiple',
          {
            params: {
              amount: 20, // Number of questions per category
              category: '18', // HTML & CSS category
              difficulty: 'medium', // Difficulty level
              type: 'multiple', // Multiple choice questions
            },
          }
        );

        const apiQuestions = response.data.results.map((questionData) => {
          const options = [...questionData.incorrect_answers, questionData.correct_answer];
          // Shuffle options to randomize their order
          options.sort(() => Math.random() - 0.5);

          return {
            question: questionData.question,
            options,
            correctAnswer: options.indexOf(questionData.correct_answer),
          };
        });

        // Concatenate questions for HTML, CSS, and JavaScript
        setQuestions(apiQuestions.concat(apiQuestions, apiQuestions));

        // Start the timer when questions are loaded
        startTimer();
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const startTimer = () => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && !isQuizOver) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        setIsQuizOver(true);
      }
    }, 1000);
  };

  const handleAnswerClick = (selectedOption) => {
    if (questions[currentQuestion].correctAnswer === selectedOption) {
      setScore(score + 1);
    }

    if (currentQuestion < 59) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizOver(true);
      setTotalScore(score); // Set the total score
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setTotalScore(0); // Reset the total score
    setTimeLeft(600); // Reset the timer (10 minutes)
  };

  return (
    <div className="quiz-wrapper">
      <h1>Quiz:Lets start</h1>
      <div className="quiz-container">
        {questions.length > 0 ? (
          isQuizOver ? (
            <div className="quiz-results">
              <h2>Quiz Over!</h2>
              <p>Your Score: {score} / 60</p>
              <p>Total Score: {totalScore}</p>
              <button onClick={resetQuiz}>Reset Quiz</button>
            </div>
          ) : (
            <div className="quiz-question">
              <p>Question {currentQuestion + 1}/60:</p>
              <h3>{questions[currentQuestion].question}</h3>
              <div className="answer-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswerClick(index)}>
                    {option}
                  </button>
                ))}
              </div>
              <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} minutes</p>
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
