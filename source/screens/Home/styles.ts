import { styled } from "styled-components/native";


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.huge};
  align-items: center;
  justify-content: center;
`
export const ContainerTimeReal = styled.View`
  position: absolute;
  right: 42px;
  top: 100px;
`
export const ContainerSvg = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;

`
export const ContainerSvgTop = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;

`
export const ContainerTimeSelect = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  

`
export const ContainerTime = styled.View`
  width: 35%;
  height: 100px;
  align-items: center;
  justify-content: center;

`
export const SelectTime = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacings.nano};
  border-color: black;
  padding: ${({ theme }) => theme.spacings.small};
`
export const SelectTimeRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
