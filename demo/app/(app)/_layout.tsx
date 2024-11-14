import { useTheme } from "@/providers/AppThemeProvider"
import { Slot } from "expo-router"
import { Text, View } from "react-native"
import { Appbar, Divider } from "react-native-paper"
import { StyleSheet } from "react-native"

const App = () => {
    const { theme } = useTheme()
    const lineColor = theme.text.color
    const backgroundColor=theme.boxContainer.backgroundColor
    
    return (
        <View style={[theme.mainContainer, theme.boxContainer]}>
            <Appbar.Header style={{backgroundColor:backgroundColor,borderColor:lineColor,borderWidth:1,borderRadius:8,margin:5}}>
                <Appbar.Content title="Shopping List" color={lineColor}/>
            </Appbar.Header>
            <Slot />
        </View>
    )
}

export default App;