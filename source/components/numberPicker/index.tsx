import React, { useEffect, useState } from 'react';
import { Container, Footer, More } from './styles';
import { Title } from '../title';

interface NumberPickerProps {
  unique?: boolean
  quantityBack: (i: number) => void
}

export function NumberPicker({ unique, quantityBack }: NumberPickerProps) {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  useEffect(() => {
    if (unique) {
      setSelectedNumber(1)
    } else {
      setSelectedNumber(30)
    }
  }, [])
  function sendMainScreen(item: boolean) {
    let changeAmount = unique ? 1 : 10;
    let newSelectedNumber = selectedNumber;

    if (item) {
      if (selectedNumber < 60) {
        newSelectedNumber += changeAmount;
      }
    } else {
      if (selectedNumber > 0) {
        newSelectedNumber -= changeAmount;
      }
    }

    setSelectedNumber(newSelectedNumber);

    if (quantityBack) {
      quantityBack(newSelectedNumber);
    }
  }

  return (
    <Container>
      <Title text={String(selectedNumber)} />
      <Footer>
        <More onPress={() => sendMainScreen(false)}>
          <Title text='-' size='medium' />
        </More>
        <More onPress={() => sendMainScreen(true)}>
          <Title text='+' size='medium' />
        </More>
      </Footer>
    </Container>
  );
};
