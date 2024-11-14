import { StyleSheet, TextStyle, ViewStyle } from "react-native"


export const lightColors = {
    background: '#ffffff',
    text: '#333333',
    primary: '#6200EE',
    boxBackground: '#f0f0f0',
    shadowColor:"#000"
};

export const darkColors = {
    background: '#333333',
    text: '#ffffff',
    primary: '#BB86FC',
    boxBackground: '#444444',
    shadowColor:"#fff"
};

const mainContainer:ViewStyle={
    flex: 1, 
    padding:10,
    
}
    

const boxContainer:ViewStyle = {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
     
  };

  const baseText: TextStyle = {
    fontFamily: 'System', 
    fontSize: 16,
};

export const lightTheme = StyleSheet.create({
    mainContainer: {
        ...mainContainer,
    },
    boxContainer: {
        ...boxContainer,
        backgroundColor: lightColors.boxBackground,
        shadowColor:lightColors.shadowColor
    },
    text: {
        ...baseText,
        color: lightColors.text,
    },
    primaryText: {
        ...baseText,
        color: lightColors.primary,
    },
});

// Dark theme styles
export const darkTheme = StyleSheet.create({
    mainContainer: {
        ...mainContainer,
    },
    boxContainer: {
        ...boxContainer,
        backgroundColor: darkColors.boxBackground,
        shadowColor:darkColors.shadowColor
    },
    text: {
        ...baseText,
        color: darkColors.text,
    },
    primaryText: {
        ...baseText,
        color: darkColors.primary,
    },
})