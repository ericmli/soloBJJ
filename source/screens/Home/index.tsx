import React, { useState } from 'react';
import { Container, ContainerSvg, ContainerSvgTop, ContainerTime, ContainerTimeReal, ContainerTimeSelect, SelectTime, SelectTimeRow } from './styles';
import { TimeReal } from '../../components/timeReal';
import SvgComponent from '../../assets/svg/svg';
import { Title } from '../../components/title';
import SvgComponent2 from '../../assets/svg/svgSlim';
import { NumberPicker } from '../../components/numberPicker';

export function Home() {
  const [childData, setChildData] = useState<number>(0);

  function handleChildData(dataFromChild: number) {
    console.log(dataFromChild)
    setChildData(dataFromChild);
  }
  return (
    <Container>
      <ContainerTimeReal>
        <TimeReal />
      </ContainerTimeReal>
      <ContainerSvgTop>
        <SvgComponent />
      </ContainerSvgTop>
      <ContainerTimeSelect>
        <ContainerTime>
          <Title text='ROUND' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker quantityBack={handleChildData} unique />
          </SelectTimeRow>
        </ContainerTime>

        <ContainerTime>
          <Title text='TIMER' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker quantityBack={handleChildData} unique />
            <Title text=':' size='xlarge' />
            <NumberPicker quantityBack={handleChildData} />
          </SelectTimeRow>
        </ContainerTime>

        <ContainerTime>
          <Title text='PREPARATION' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker quantityBack={handleChildData} unique />
            <Title text=':' size='xlarge' />
            <NumberPicker quantityBack={handleChildData} />
          </SelectTimeRow>
        </ContainerTime>
      </ContainerTimeSelect>
        {/* <SelectTime/> */}
      <ContainerSvg>
        <SvgComponent2 />
      </ContainerSvg>
    </Container>
  );
}