import AddItem from "@/components/app/AddItem";
import ItemList from "@/components/app/ItemList";
import { useTheme } from "@/providers/AppThemeProvider";
import React from "react";
import { useEffect, useState } from "react";
import { Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Button, Card, Dialog, Divider, Modal, Text, TextInput } from "react-native-paper";
import DialogTitle from "react-native-paper/lib/typescript/components/Dialog/DialogTitle";

const ShoppingList = () => {
    const { theme } = useTheme();
    const lineColor = theme.text.color
    const backgroundColor = theme.boxContainer.backgroundColor

    const [items, setItems] = useState<string[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalValue, setModalValue] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number>(0);


    const handleAddItem = (item: string) => {
        const itemsArray = [...items];
        itemsArray.push(item);
        setItems(itemsArray);
    }

    const handleDelete = (index: number) => {
        const itemsToDelete = [...items];
        itemsToDelete.splice(index, 1)
        setItems(itemsToDelete)
    }
    const handleEditclick = (index: number) => {
        setEditIndex(index);
        setModalValue(items[index])
        setModalOpen(true);
    }
    const handleEditSubmit = (item: string) => {
        setModalOpen(false);
        const itemsToEdit = [...items];
        itemsToEdit[editIndex] = item;
        setItems(itemsToEdit);
    }

    const hideModal = () => setModalOpen(false);

    const clearallItems = () => {
        setItems([])
    }

    return (
        
            <View style={{ height: "80%" }}>
                <Card style={{ backgroundColor: backgroundColor, borderColor: lineColor, borderWidth: 1, borderRadius: 8, margin: 5 }}>
                    <AddItem onSubmit={handleAddItem} label="Add Item" />
                </Card>
                
                { items.length>0 &&
                    (<Card style={{ backgroundColor: backgroundColor, borderColor: lineColor, borderWidth: 1, borderRadius: 8, margin: 5, minHeight: 20 }}>
                        {items.map((item, index) => (
                            <View key={index}>
                                <ItemList item={item} key={index} handleDelete={handleDelete} index={index} handleEdit={handleEditclick} />
                                <Divider style={{ backgroundColor: lineColor }} key={item} />
                            </View>
                        ))}
                    </Card>)
                }
                {
                    items.length > 0 && (
                        <Button mode="outlined" onPress={clearallItems}>
                            Clean All items
                        </Button>
                    )
                }
                <Dialog visible={modalOpen} onDismiss={hideModal}>
                    <Dialog.Title>Edit element</Dialog.Title>
                    <Dialog.Content>
                        <AddItem onSubmit={handleEditSubmit} label="" value={modalValue} />
                    </Dialog.Content>
                </Dialog>
            </View>
       

    )
}
export default ShoppingList;