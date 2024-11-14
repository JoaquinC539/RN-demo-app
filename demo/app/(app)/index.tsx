import Input from "@/components/app/AddItem";
import { useTheme } from "@/providers/AppThemeProvider";
import React from "react";
import { useEffect, useState } from "react";

import { Card, Text } from "react-native-paper";

const ShoppingList = () => {
    const { theme } = useTheme();
    const lineColor = theme.text.color
    const backgroundColor = theme.boxContainer.backgroundColor

    const [items, setItems] = useState<string[]>([]);
    useEffect(() => { //TODO remove only for development
        console.log(items)
    }, [items])

    const handleAddItem = (item: string) => {
        console.log("item added", item);
        const itemsArray=[...items];
        itemsArray.push(item);
        setItems(itemsArray);
    }
    return (
        <>
            <Card style={{ backgroundColor: backgroundColor, borderColor: lineColor, borderWidth: 1, borderRadius: 8, margin: 5 }}>
                <Input onSubmit={handleAddItem} label="Add Item" />
            </Card>
            <Card style={{ backgroundColor: backgroundColor, borderColor: lineColor, borderWidth: 1, borderRadius: 8, margin: 5 }}>
                <Text>Here goes the shopping list</Text>
            </Card>
        </>
    )
}
export default ShoppingList;