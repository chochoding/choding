"use client";

import { useEffect, useState } from "react";
import QuizData from '../daily.json';
import DailyquizEnd from "./DailyquizEnd";


export default function Dailyquiz() {

    const [timer, setTimer] = useState(10);
    const [ingId, setIngId] = useState(0);
    const [ques, setQues] = useState(QuizData.dailyQuiz);
    const ingQues = ques[ingId];
    const [testValue, setTestValue] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timer]);

    const formatTime = (time) => {
        return time < 10 ? '0' + time : time;
    };

    return (
        <div className='popUp02'>
            <div className='popUpContents'>
                <h3 className='dailyNum'>2024. 03. 02</h3>
                <div className='qQuestion'>{ingQues.question}</div>
                <div className='qAnswer'>
                    <form>
                        <p><label className="radio_cus"><input type="radio" id="choice1" name="choice" value="1" />{ingQues.choice[0]}</label></p>
                        <p><label className="radio_cus"><input type="radio" id="choice2" name="choice" value="2" />{ingQues.choice[1]}</label></p>
                        <p><label className="radio_cus"><input type="radio" id="choice3" name="choice" value="3" />{ingQues.choice[2]}</label></p>
                        <p><label className="radio_cus"><input type="radio" id="choice4" name="choice" value="4" />{ingQues.choice[3]}</label></p>
                    </form>
                </div>
                {/* <p>점수는 {score}</p> */}
                <p className='timer'>00:{formatTime(timer)}</p>
                <button className='popUpBtn'
                >제출하기</button>

            </div>

        </div>
    )
}