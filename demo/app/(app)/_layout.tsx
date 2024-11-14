import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"


const App = () => {
    return  (
    <View>
        <Text style={{color:"black"}}>Text in (app) layout</Text>
        <Slot />
    </View>
    
)
    
}

export default App;