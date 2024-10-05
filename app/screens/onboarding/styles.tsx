import styled from 'styled-components/native';
import {Image, Text, View} from 'react-native';
import {colors} from '../../../config';

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black900};
`;

export const StyledImage = styled(Image)`
  margin-top: 40px;
  width: 60%;
  height: 50%;
`;

export const TextBackground = styled(Text)`
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 60%;
  padding: 8px;
  border-radius: 13px;
  text-align: center;
  font-size: 32px;
  font-weight: 300;
  margin: 6px;
`;

export const StyledText = styled(Text)`
  color: ${colors.white};
  font-size: 35px;
  font-weight: 300;
  margin: 6px;
  text-align: center;
`;
