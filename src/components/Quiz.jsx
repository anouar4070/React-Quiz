import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length ;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
 },[] );

  //When a timeout occurs, it will trigger handleSkipAnswer, which will then call handleSelectAnswer(null) to mark the question as skipped by adding null to the list of answers.
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
     
    );
  }
  // Only shuffle answers if the quiz is not complete
  // const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAns={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    </div>
  );
}
