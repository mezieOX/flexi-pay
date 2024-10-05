import styled from 'styled-components/native';
import {colors} from '../../config';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  padding: 0px 15px;
  border-radius: 8px;
  margin: 20px 0;
`;

export const Text = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`;
