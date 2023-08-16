import { styled } from "styled-components/native";
import IconImport from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.huge};
  align-items: center;
  justify-content: center;
`
export const Body = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ContainerSvgTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;

`
export const ContainerStart = styled.View`
  flex-direction: row;
  gap: 3px;
`
export const ContainerTimerReal = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const ClickSvg = styled.TouchableOpacity`
  
`