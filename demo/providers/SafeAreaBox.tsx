import React, { FC, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from './AppThemeProvider';


interface SafeAreaBoxProps {
    children: ReactNode;
    style?: ViewStyle;
}

export const SafeAreaBox: FC<SafeAreaBoxProps> = ({ children, style }) => {
    const insets = useSafeAreaInsets();    
    return (
        <View
            style={[                
                {flex:1},
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
                style ? style : {},
            ]}
        >
            {children}
        </View>
    );
};
