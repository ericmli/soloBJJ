import React, { useEffect, useState } from 'react';
import { BorderTimer, Container, ContainerTime, SelectTimeRow } from './styles';
import { Title } from '../../components/title';

export function Timer({ data, stop }: any) {
  const round = data[0]
  const time = data[1]
  const timeSecond = data[2]
  const prep = data[3]
  const prepSecond = data[4]

  function timeInSeconds(minutes: number, seconds: number): number {
    return minutes * 60 + seconds;
  }

  const mainTime = timeInSeconds(time, timeSecond)
  const prepTime = timeInSeconds(prep, prepSecond)
  const [timeRemaining, setTimeRemaining] = useState(mainTime);

  useEffect(() => {
    if (timeRemaining > 0 && !stop) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeRemaining, stop])

  function transformMinutes(item: number) {
    const minutes = Math.floor(timeRemaining / 60);
    return minutes.toString().padStart(2, '0')[item]
  }
  function transformSeconds(item: number) {
    const seconds = timeRemaining % 60;
    return seconds.toString().padStart(2, '0')[item]
  }

  const [maxRound, setMaxRound] = useState<number>(2)
  const [sendPrepTime, setSendPrepTime] = useState<boolean>(true)
  const [endTime, setEndTime] = useState<boolean>(true)
  if (timeRemaining === 0) {
    if (endTime) {
      setTimeRemaining(4)
      setEndTime(false)
    } else if (prepTime && sendPrepTime) {
      setEndTime(true)
      setSendPrepTime(false)
      setTimeRemaining(prepTime)
    } else if (maxRound <= round) {
      setEndTime(true)
      setMaxRound(maxRound + 1)
      setTimeRemaining(mainTime)
      setSendPrepTime(true)
    }
  }

  useEffect(() => {
    var Sound = require('react-native-sound');
    if (endTime) {
      const playSound = (fileName: string) => {
        const sound = new Sound(fileName, Sound.MAIN_BUNDLE, () => {
          sound.play(() => {
            sound.release();
          });
        });

        sound.setVolume(1);
        sound.setCategory('Playback');

        return sound;
      };

      if (timeRemaining <= 4 && timeRemaining > 1) {
        const soundInstance = playSound('continue_timer.mp3');
        return () => {
          soundInstance.release();
        };
      }
      if (timeRemaining === 1) {
        const soundInstance = playSound('end_timer.mp3');
        return () => {
          soundInstance.release();
        };
      }
    }
  }, [timeRemaining]);

  return (
    <Container>
      <ContainerTime>
        {endTime ? <Title size='xlarge' family='bold' text={sendPrepTime ? `TEMPO ${maxRound - 1}/${round}` : 'PREPARAÇÃO'} marginBottom='small' />
          : <Title size='xlarge' family='bold' text='ESPERA' />}
        <SelectTimeRow>
          <BorderTimer>
            <Title size='big' family='bold' text={transformMinutes(0)} />
          </BorderTimer>
          <BorderTimer>
            <Title size='big' family='bold' text={transformMinutes(1)} />
          </BorderTimer>
          <Title text=':' size='xlarge' />
          <BorderTimer>
            <Title size='big' family='bold' text={transformSeconds(0)} />
          </BorderTimer>
          <BorderTimer>
            <Title size='big' family='bold' text={transformSeconds(1)} />
          </BorderTimer>
        </SelectTimeRow>
      </ContainerTime>
    </Container>
  );
}