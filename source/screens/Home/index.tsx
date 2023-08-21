import React, { useState } from 'react';
import { Body, Container, ContainerStart, ContainerSvgTop, ContainerTime, ContainerTimeSelect, ContainerTimerReal, Footer, Icon, SelectTime, SelectTimeRow } from './styles';
import { TimeReal } from '../../components/timeReal';
import SvgComponent from '../../assets/svg/svg';
import { Title } from '../../components/title';
import SvgComponent2 from '../../assets/svg/svgSlim';
import { NumberPicker } from '../../components/numberPicker';
import { useNavigation } from '@react-navigation/native';
import { Timer } from '../Timer';

export function Home() {
  const navigation = useNavigation();
  const [childData, setChildData] = useState<number[]>([1, 1, 30, 0, 30]);
  const [switchScreen, setSwitchScreen] = useState<boolean>(true);
  const [stopTimer, setStopTimer] = useState<boolean>(false);


  function handleChildData(index: number, dataFromChild: number) {
    const newChildValues = [...childData];
    newChildValues[index] = dataFromChild;
    setChildData(newChildValues);
  }

  return (
    <Container>
      <Body>
        <ContainerSvgTop>
          <SvgComponent />
        </ContainerSvgTop>

        {switchScreen ? (<ContainerTimeSelect>

          <ContainerTime>
            <Title text='RODADA' size='xlarge' family='bold' marginBottom='xnano' />
            <SelectTimeRow>
              <NumberPicker initialNumber={childData[0]} quantityBack={handleChildData} index={0} unique />
            </SelectTimeRow>
          </ContainerTime>

          <ContainerTime>
            <Title text='TEMPO' size='xlarge' family='bold' marginBottom='xnano' />
            <SelectTimeRow>
              <NumberPicker initialNumber={childData[1]} quantityBack={handleChildData} index={1} unique />
              <Title text=':' size='xlarge' />
              <NumberPicker initialNumber={childData[2]} quantityBack={handleChildData} index={2} />
            </SelectTimeRow>
          </ContainerTime>

          <ContainerTime>
            <Title text='PREPARAÇÃO' size='xlarge' family='bold' marginBottom='xnano' />
            <SelectTimeRow>
              <NumberPicker initialNumber={childData[3]} quantityBack={handleChildData} index={3} unique />
              <Title text=':' size='xlarge' />
              <NumberPicker initialNumber={childData[4]} quantityBack={handleChildData} index={4} />
            </SelectTimeRow>
          </ContainerTime>

        </ContainerTimeSelect>
        ) :
          <Timer data={childData} stopTime={stopTimer} />
        }

        <Footer>

          <ContainerStart>
            {!switchScreen && <SelectTime onPress={() => setStopTimer(!stopTimer)}>
              <Icon name={!stopTimer ? 'pause' : 'play'} size={40} color='white' />
            </SelectTime>}
            <SelectTime onPress={() => {
              setSwitchScreen(!switchScreen)
              setStopTimer(false)
              }}>
              <Icon name={switchScreen ? 'play' : 'undo-variant'} size={40} color='white' />
            </SelectTime>

          </ContainerStart>

          <SvgComponent2 />
          <ContainerTimerReal>
            <TimeReal />
          </ContainerTimerReal>
        </Footer>
      </Body>
    </Container>
  );
}