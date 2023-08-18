import React, { useEffect, useState } from 'react';
import { Container, Footer, More } from './styles';
import { Title } from '../title';

interface NumberPickerProps {
  index: number;
  unique?: boolean;
  quantityBack?: (index: number, value: number) => void;
  initialNumber: number
}

export function NumberPicker({ initialNumber, index, unique, quantityBack }: NumberPickerProps) {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  
  useEffect(() => {
    setSelectedNumber(initialNumber);
  }, []);
  
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
      quantityBack(index, newSelectedNumber);
    }
  }
  
  return (
    <Container>
      <Title family='bold' text={String(selectedNumber)} size='large' />
      <Footer>
        <More onPress={() => sendMainScreen(false)}>
          <Title text='-' family='bold' size='large' />
        </More>
        <More onPress={() => sendMainScreen(true)}>
          <Title text='+' family='bold' size='large' />
        </More>
      </Footer>
    </Container>
  );
}
