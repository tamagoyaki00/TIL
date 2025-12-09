import quizData from "../data/quiz";
import Display from "../components/Display/Display"
import Button from "../components/Display/Button/Button";
import { useEffect, useState } from "react";
import { ROUTES } from "../const";
import { useNavigate } from "react-router-dom";



export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;

    const handleClick = (clickedIndex) => {
        if(clickedIndex === quizData[quizIndex].answerIndex) {
            setAnswerLogs(prev => [...prev, true])
        } else {
            setAnswerLogs(prev => [...prev, false]);
        }
        setQuizIndex(prev => prev + 1);
        };
    
    useEffect(()=> {
        if(answerLogs.length === MAX_QUIZ_LEN){
            const correctNum = answerLogs.filter(answer => answer === true)
            navigation(ROUTES.RESULT, {
                state: {
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctNumLen: correctNum.length
                }
            });
        }
    },[answerLogs]);

    return (
        <div>
            {quizData[quizIndex] && <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => {
                return (
                    <Button key={`option-${index}`} onClick={() => handleClick(index)}>
                        {option}
                    </Button>
                    );
                })}
        </div>
    );
}
