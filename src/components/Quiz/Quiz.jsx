import { useState, useCallback } from "react";

import Question from "../Question";
import QUESTIONS from "../../questions.js";
import Summary from "../Summary";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState("answered");
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, [activeQuestionIndex]);

    const skipSelectAnswer = useCallback(() => {handleSelectAnswer(null)}, []);

    if(quizIsComplete) {
        return <Summary userAnswers={userAnswers}  />
    }

    return <div id="quiz">
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={skipSelectAnswer}
        />
    </div>;
}