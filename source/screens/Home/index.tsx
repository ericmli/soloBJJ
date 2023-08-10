import React from 'react';
import { Container, ContainerSvg, ContainerSvgTop, ContainerTime, ContainerTimeReal, ContainerTimeSelect, SelectTime, SelectTimeRow } from './styles';
import { TimeReal } from '../../components/timeReal';
import SvgComponent from '../../assets/svg/svg';
import { Title } from '../../components/title';
import SvgComponent2 from '../../assets/svg/svgSlim';
import { NumberPicker } from '../../components/numberPicker';

export function Home() {
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
          <Title text='SPAR TIME' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker amount={10}/>
            <Title text=':' size='xlarge' />
            <NumberPicker amount={60}/>
          </SelectTimeRow>
        </ContainerTime>

        <ContainerTime>
          <Title text='REST TIME' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker amount={10}/>
            <Title text=':' size='xlarge' />
            <NumberPicker amount={60}/>
          </SelectTimeRow>
        </ContainerTime>

        <ContainerTime>
          <Title text='PREP TIME' size='xlarge' family='bold' marginBottom='xnano' />
          <SelectTimeRow>
            <NumberPicker amount={10}/>
            <Title text=':' size='xlarge' />
            <NumberPicker amount={60}/>
          </SelectTimeRow>
        </ContainerTime>
      </ContainerTimeSelect>
      <ContainerSvg>
        <SvgComponent2 />
      </ContainerSvg>
    </Container>
  );
}