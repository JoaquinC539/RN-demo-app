import React, { useState } from "react";
import { FC } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

interface IAddItem{
    onSubmit:(text:string)=>void,
    label:string
}
const AddItem:FC<IAddItem>=({onSubmit,label})=>{
    const [item,setItem]=useState<string>("");

    const handleSubmit=()=>{
        if(item!=="" && item!==undefined && item!==null){
            onSubmit(item);
        setItem("");
        }
        
    }
    return(
        <View style={{margin:8}}>
            <TextInput
            label={label}
            onChangeText={(text)=>setItem(text)}
            mode="outlined"
            value={item}
            right={
                <TextInput.Icon icon="send-circle" onPress={handleSubmit}/>
            }
            />
            
        </View>
    )
}

export default AddItem;