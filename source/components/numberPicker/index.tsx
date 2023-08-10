import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Container, Selector } from './styles';

interface NumberPickerProps {
  amount?: number
}

export function NumberPicker(amount: NumberPickerProps) {
  const [selectedNumber, setSelectedNumber] = useState<number>(0);
  const quantity = amount.amount
  const handleNumberChange = (itemValue: number, itemIndex: number) => {
    setSelectedNumber(itemValue);
  };
  const generatePickerItems = (count: any) => {
    const items = [];
    for (let i = 0; i <= count; i++) {
      items.push(<Picker.Item key={i} label={String(i).padStart(2, '0')} value={i} />);
    }
    return items;
  };
  return (
    <Container>
      <Selector
        selectedValue={selectedNumber}
        onValueChange={handleNumberChange}
      >
        {generatePickerItems(quantity)}
      </Selector>

    </Container>
  );
};
