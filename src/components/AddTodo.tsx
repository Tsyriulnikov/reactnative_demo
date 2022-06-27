import React, {useState} from "react"
import {View, StyleSheet, Button, TextInput, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";

type AddtodoType = {
    addTodoHandler: (title: string) => void
}

export const AddTodo = (props: AddtodoType) => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const onChangeHandler = (text: string) => {
        setInputTitle(text)
    }
const addButtonHandler = () => {
  props.addTodoHandler(inputTitle)
   setInputTitle('')
}

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       value={inputTitle}
                       onChangeText={text => onChangeHandler(text)}
            />
            <Button title={'Add'} onPress={addButtonHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        padding: 10
    }
})