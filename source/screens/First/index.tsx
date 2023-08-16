import React from 'react';
import { Body, ClickSvg, Container, ContainerStart, ContainerSvgTop, ContainerTimerReal, Footer } from './styles';
import SvgComponent from '../../assets/svg/svg';
import SvgComponent2 from '../../assets/svg/svgSlim';
import { TimeReal } from '../../components/timeReal';
import { useNavigation } from '@react-navigation/native';

export function First() {
  const navigation = useNavigation();

  return (
    <Container>
      <Body>
        <ContainerSvgTop>
          <SvgComponent />
        </ContainerSvgTop>
        <ContainerTimerReal>
          <TimeReal big />
        </ContainerTimerReal>
        <Footer>
          <ClickSvg onPress={() => navigation.navigate('Home')}>
            <SvgComponent2 />
          </ClickSvg>
        </Footer>
      </Body>
    </Container>
  );
}