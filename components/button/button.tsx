import React from 'react';
import {Container, Text} from './styles';
import {ArrowUpIcon} from '../../assets/svg';

interface ButtonProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>Go to dashboard</Text>
      <ArrowUpIcon />
    </Container>
  );
};
