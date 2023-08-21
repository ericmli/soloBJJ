import { styled } from "styled-components/native";

interface PropsTimerColor{
  colorBorder: boolean
}

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.huge};
  align-items: center;
  justify-content: center;

`
export const ContainerTime = styled.View`
  height: 100px;
  align-items: center;
  justify-content: center;
`
export const SelectTimeRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const BorderTimer = styled.View<PropsTimerColor>`
  border-width: 0.8px;
  border-radius: 10px;
  border-color: ${(props) => props.colorBorder ? 'black' : 'red' };
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center ;
`