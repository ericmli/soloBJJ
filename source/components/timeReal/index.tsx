import React, { useEffect, useState } from 'react';
import { Title } from '../title';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';

export function TimeReal() {
  const [time, setTime] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateTime() {
    const brtTime = moment().tz('America/Sao_Paulo');
    const formattedTime = brtTime.format('HH:mm:ss');
    setTime(formattedTime);
  }

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateDateTime() {
    const brtTime = moment().tz('America/Sao_Paulo');
    const formattedDateTime = brtTime.format('HH:mm:ss');
    setDateTime(formattedDateTime);
  }
  return (
    <>
      <Title text={dateTime} family='bold' size='medium' marginBottom='huge' />
    </>
  );
}