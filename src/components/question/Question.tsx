"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Close from '@/essets/close.svg';
import './question.scss';

import LevelTestStart from './LevelTestStart';
import LevelTest from './LevelTest';
import LevelTestEnd from './LevelTestEnd';

import DailyquizStart from './DailyquizStart';
import Dailyquiz from './Dailyquiz';
import DailyquizEnd from './DailyquizEnd';
import { useQuestion } from '@/context/questionStore';


export default function UserQuestion() {

    const { quiz, isOpenFunc } = useQuestion();
    const [isTest, setIsTest] = useState(false);
    const [isDaily, setIsDaily] = useState(false);

    const handleClose = () => {
        isOpenFunc({ isOpen: false, isTest: false });
    };

    const handleTestStart = () => {
        setIsTest(true);
    };

    const handleDailyStart = () => {
        setIsDaily(true);
    };

    const handleTestEnd = () => {
        setIsTest(false);
    };

    const handleDailyEnd = () => {
        setIsDaily(false);
    };

    if (!quiz.isOpen) return null;



    return (
        <section className='question'>

            <div className='popUpQues'>
                <div className='popUpBg'>
                    <button className='popUpX'
                        onClick={handleClose}>
                        <Image
                            className='close'
                            src={Close}
                            alt='close Image'
                            width={25} height={25}
                        ></Image>
                    </button>

                    {
                        quiz.isTest ? <LevelTest /> : <Dailyquiz />
                    }

                    {/* <LevelTestStart /> */}
                    {/* <LevelTest /> */}
                    {/* <LevelTestEnd /> */}

                    {/* <DailyquizStart /> */}
                    {/* <Dailyquiz /> */}
                    {/* <DailyquizEnd /> */}

                    {/* 
                    {isTest ?
                        <LevelTestStart startTest={handleTestStart} /> :
                        <DailyquizStart startTest={handleDailyStart} />
                    } */}

                    {/* {isDaily ? <DailyquizEnd /> : <Dailyquiz finishTest={handleDailyEnd} />} */}

                </div>
            </div>



        </section>
    );
}
