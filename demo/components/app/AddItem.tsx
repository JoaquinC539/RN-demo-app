import { useTheme } from "@/providers/AppThemeProvider";
import React, { useRef, useState } from "react";
import { FC } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

interface IAddItem {
    onSubmit: (text: string) => void,
    label: string,
    value?: string
}
const AddItem: FC<IAddItem> = ({ onSubmit, label, value }) => {
    const inputRef = useRef();
    const { theme } = useTheme();
    const [item, setItem] = useState<string>(value ? value : "");

    const handleSubmit = () => {
        if (item !== "" && item !== undefined && item !== null) {
            onSubmit(item);
            setItem("");
        }
    }
    const dismissKeyBoard = () => {
        const ref = inputRef.current;
        Keyboard.dismiss();
    }

    return (

        <View style={{ margin: 8 }}>
            <TextInput
                label={label}
                onChangeText={(text) => setItem(text)}
                mode="outlined"
                value={item || ""}
                right={
                    <TextInput.Icon icon="send-circle" onPress={handleSubmit} disabled={!item.trim()} style={[theme.primaryText]} />
                }
                onBlur={Keyboard.dismiss}
            />
            {/* <Button 
                    mode="contained" 
                    onPress={handleSubmit}
                    style={{ marginTop: 10 }}
                    disabled={!item.trim()} // Disable when empty
                >
                    Submit
                </Button> */}
        </View>

    )
}

export default AddItem;