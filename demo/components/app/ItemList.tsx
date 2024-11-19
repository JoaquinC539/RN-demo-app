import { useTheme } from "@/providers/AppThemeProvider"
import React, { useState } from "react"
import { FC } from "react"
import {  View } from "react-native"
import { Checkbox, Icon, IconButton, List } from "react-native-paper"

interface IItemList{
    item:string,
    handleDelete:(index:number)=>void,
    index:number,
    handleEdit:(index:number)=>void
}

const ItemList:FC<IItemList>=({item,handleDelete,index,handleEdit})=>{
    const { theme } = useTheme();
    const lineColor = theme.text.color
    
    const [checked,setChecked]=useState<boolean>(false)

    const handleEditIconclick=(index:number)=>{
        handleEdit(index)
    }
    
    
    return(
        <List.Item
        titleStyle={
            [theme.text,
            checked && {textDecorationLine:"line-through"}
        ]
        }    
        title={item}
        left={()=><Checkbox status={checked?"checked":"unchecked"}  uncheckedColor={lineColor} onPress={
            ()=>{
                setChecked(!checked)
            }
        } />}
        right={()=>(
            <View style={{flexDirection:'row'}}>
                <IconButton icon="pencil" iconColor={lineColor} onPress={()=>handleEditIconclick(index)} />
                <IconButton icon="delete" iconColor={lineColor} onPress={()=>handleDelete(index)}/>
                
            </View>
        )}
         />

        
    )
}
export default ItemList
