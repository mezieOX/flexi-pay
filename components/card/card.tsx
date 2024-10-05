// Card.tsx
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Header, TitleText, Contents} from './styles';
import {ArrowLeftIcon} from '../../assets/svg';

interface CardProps {
  children: React.ReactNode;
  title: string;
}

export const Card: React.FC<CardProps> = ({children, title}) => {
  return (
    <Container>
      <Header>
        <TitleText>{title}</TitleText>
        <TouchableOpacity>
          <ArrowLeftIcon />
        </TouchableOpacity>
      </Header>
      <Contents>{children}</Contents>
    </Container>
  );
};
