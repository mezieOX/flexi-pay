import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../config';

export const ArrowUpIcon = () => {
  return (
    <Svg width="30" height="35" viewBox="0 0 20 30" fill="none">
      <Path
        d="M12.7003 9.67639L20.2769 9.66712L20.2862 17.2438"
        stroke={colors.secondary}
        stroke-width="5.08916"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.68011 20.2899L20.1709 9.77336"
        stroke={colors.secondary}
        stroke-width="5.08916"
        stroke-miterlimit="19"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
