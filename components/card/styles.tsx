// styles.tsx
import styled from 'styled-components/native';
import {colors} from '../../config';

export const Container = styled.View`
  background-color: ${colors.gray400};
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.gray300};
  padding: 18px 14px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const Contents = styled.View`
  padding: 12px 0;
`;
