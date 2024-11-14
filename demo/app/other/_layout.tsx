import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"

const OtherApp = () => {
    return  (
    <View>
        <Text style={{color:"black"}}>Text in (other) layout</Text>
        <Slot />
    </View>
    
)
    
}

export default OtherApp;