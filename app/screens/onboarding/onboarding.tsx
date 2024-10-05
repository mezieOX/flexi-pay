import React from 'react';
import {Button} from '../../../components';
import {Container, StyledImage, TextBackground, StyledText} from './styles';
const OnBoarding = ({navigation}: any) => {
  return (
    <Container>
      <StyledImage
        resizeMode="contain"
        source={require('../../../assets/images/onboarding.png')}
      />
      <TextBackground>Send</TextBackground>
      <StyledText>Receive</StyledText>
      <StyledText>Connect</StyledText>
      <Button onPress={() => navigation.navigate('Dashboard')} />
    </Container>
  );
};

export default OnBoarding;
