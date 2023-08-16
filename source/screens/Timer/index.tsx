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
  const [endTime, setEndTime] = useState<boolean>(false)
  if (timeRemaining === 0) {
    if (prepTime && sendPrepTime) {
      setSendPrepTime(false)
      setTimeRemaining(prepTime)
    } else if (maxRound <= round) {
      setMaxRound(maxRound + 1)
      setTimeRemaining(mainTime)
      setSendPrepTime(true)
    }
  }

  useEffect(() => {
    var Sound = require('react-native-sound');

    Sound.setCategory('Playback');

    if (timeRemaining === 3) {
      const sound = new Sound('countdown_sound.mp3', Sound.MAIN_BUNDLE, (error: any) => {
        if (error) {
          console.log('Error loading sound: ', error);
        } else {
          sound.play();
        }
      });

      sound.setVolume(1);

    }
  }, [timeRemaining])

  return (
    <Container>
      <ContainerTime>
        {!endTime ? <Title size='xlarge' family='bold' text={sendPrepTime ? `TEMPO ${maxRound - 1}/${round}` : 'PREPARAÇÃO'} marginBottom='small' /> :
          <Title size='xlarge' family='bold' text='FIM' marginBottom='small' />}
        <SelectTimeRow>
          <BorderTimer>
            <Title size='huge' family='bold' text={transformMinutes(0)} />
          </BorderTimer>
          <BorderTimer>
            <Title size='huge' family='bold' text={transformMinutes(1)} />
          </BorderTimer>
          <Title text=':' size='xlarge' />
          <BorderTimer>
            <Title size='huge' family='bold' text={transformSeconds(0)} />
          </BorderTimer>
          <BorderTimer>
            <Title size='huge' family='bold' text={transformSeconds(1)} />
          </BorderTimer>
        </SelectTimeRow>
      </ContainerTime>
    </Container>
  );
}