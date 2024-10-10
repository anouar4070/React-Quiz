import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionText,
  answers,
  onSelectAns,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAns}
      />
    </div>
  );
}

/**                     ***Advantage fo this component ***
 *  the problem: on passing to new question many progress bar appears
 * the problem is that we have the same key on Answers.jsx & QuestionTimer.jsx components, so we combine theme on a single component Question.jsx and we give it that key
 * key={activeQuestionIndex}
 */
