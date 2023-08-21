import React, { useEffect, useState } from 'react';
import { BorderTimer, Container, ContainerTime, SelectTimeRow } from './styles';
import { Title } from '../../components/title';
import * as Animatable from 'react-native-animatable';
function activeSound() {
  var Sound = require('react-native-sound');

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
  const soundInstance = playSound('countdown_sound.mp3');
  return () => {
    soundInstance.release();
  }
}
function endSound() {
  var Sound = require('react-native-sound');

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
  const soundInstance = playSound('sound_end.mp3');
  console.log('passou');
  return () => {
    soundInstance.release();
  }

}

export function Timer({ data, stopTime }: any) {
  const round = data[0]
  const time = data[1]
  const timeSecond = data[2]
  const prep = data[3]
  const prepSecond = data[4]
  const mainTime = timeInSeconds(time, timeSecond)
  const prepTime = timeInSeconds(prep, prepSecond)
  const [timeRemaining, setTimeRemaining] = useState<number>(mainTime);
  const [stop, setStop] = useState<boolean>(false);
  const [maxRound, setMaxRound] = useState<number>(2)
  const [sendPrepTime, setSendPrepTime] = useState<boolean>(true)
  const [waitingAfterStop, setWaitingAfterStop] = useState<number>(5);
  const [colorBorder, setColorBorder] = useState<boolean>(true)

  function transformMinutes(item: number) {
    const minutes = Math.floor(timeRemaining / 60);
    return minutes.toString().padStart(2, '0')[item]
  }
  function transformSeconds(item: number) {
    const seconds = timeRemaining % 60;
    return seconds.toString().padStart(2, '0')[item]
  }
  function timeInSeconds(minutes: number, seconds: number): number {
    return minutes * 60 + seconds;
  }

  useEffect(() => {
    if (timeRemaining > 0 && !stopTime && !stop) {
      const intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeRemaining, stop, stopTime]);

  useEffect(() => {
    if (waitingAfterStop > 0 && timeRemaining === 0) {
      const timeoutId = setTimeout(() => {
        setWaitingAfterStop(prevTime => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [timeRemaining, waitingAfterStop])

  useEffect(() => {
    if (waitingAfterStop === 4) {
      activeSound()
    }
    if (waitingAfterStop === 0) {
      setStop(true);
      if (prepTime && sendPrepTime) {
        setStop(false);
        setSendPrepTime(false);
        setTimeRemaining(prepTime);
        setWaitingAfterStop(5)
      } else if (maxRound <= round) {
        endSound()
        setStop(false);
        setMaxRound(prevMaxRound => prevMaxRound + 1);
        setTimeRemaining(mainTime);
        setSendPrepTime(true);
        setWaitingAfterStop(5)
      }
    }
  }, [waitingAfterStop])

  function RenderDigit({ item }: { item: string }) {
    return (
      <BorderTimer colorBorder={colorBorder}>
        <Animatable.Text
          animation={waitingAfterStop <= 4 ? 'fadeIn' : undefined}
          duration={1000}
          iterationCount={waitingAfterStop ? 'infinite' : 1}
        >
          <Title size='big' family='bold' text={item} />
        </Animatable.Text>
      </BorderTimer>
    )
  }
  return (
    <Container>
      <ContainerTime>
        <Title size='xlarge' family='bold' text={sendPrepTime ? `TEMPO ${maxRound - 1}/${round}` : 'PREPARAÇÃO'} marginBottom='small' />
        <SelectTimeRow>
          <RenderDigit item={transformMinutes(0)} />
          <RenderDigit item={transformMinutes(1)} />
          <Title text=':' size='huge' />
          <RenderDigit item={transformSeconds(0)} />
          <RenderDigit item={transformSeconds(1)} />
        </SelectTimeRow>
      </ContainerTime>
    </Container>
  );
}