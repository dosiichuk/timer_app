import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';
import Button from '../Button/Button.js';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [savedTime, setSavedTime] = useState(null);
  const [start, setStart] = useState(0);

  const startTimer = () => {
    const newStart = new Date();
    setStart(newStart);
  };
  const stopTimer = () => {
    if (timer) clearInterval(timer);
    setSavedTime(time);
    // setStart(0);
  };
  const resetTimer = () => {
    setStart(null);
    if (timer) {
      setTime(0);
      clearInterval(timer);
      setSavedTime(null);
    }
  };
  useEffect(() => {
    if (start) {
      setTimer(
        setInterval(() => {
          setTime((currTime) => {
            if (!savedTime) {
              return new Date() - start;
            } else {
              console.log(savedTime);
              return new Date() - start + savedTime;
            }
          });
        }, 1)
      );
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [start]);

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)} : </span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} . </span>
        <span>{('0' + Math.floor(time)).slice(-3)}</span>
      </div>

      <div className={styles.container}>
        <Button changeTimer={startTimer}>START</Button>
        <Button changeTimer={stopTimer}>STOP</Button>
        <Button changeTimer={resetTimer}>RESET</Button>
      </div>
    </div>
  );
}
