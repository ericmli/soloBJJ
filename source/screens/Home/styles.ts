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
  top: -150px;
  width: 100%;
  align-items: center;

`
export const ContainerTimeSelect = styled.View`
  width: 100%;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ContainerTime = styled.View`
  width: 33.33%;
  align-items: center;
  justify-content: center;

`
export const SelectTimeRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const ContainerStart = styled.View`
  flex-direction: row;
  gap: 3px;
`
export const SelectTime = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
  padding: 3px;
`
export const Icon = styled(IconImport)`
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`