import React from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors} from '../../config';

interface BottomSheetProps {
  children: React.ReactNode;
  isOpen: any;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({children, isOpen}) => {
  return (
    <View style={{flex: 1}}>
      <RBSheet
        ref={isOpen}
        useNativeDriver={false}
        customStyles={{
          container: {
            backgroundColor: colors.black300,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: colors.white,
            width: 70,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
          style: {
            backgroundColor: 'red',
          },
        }}
        draggable
        dragOnContent
        height={700}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        {children}
      </RBSheet>
    </View>
  );
};
