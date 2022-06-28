import React, {useState} from "react"
import {View, StyleSheet, Button, TextInput, NativeSyntheticEvent, TextInputChangeEventData, Alert} from "react-native";

type AddtodoType = {
    addTodoHandler: (title: string) => void
}

export const AddTodo = (props: AddtodoType) => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const onChangeHandler = (text: string) => {
        setInputTitle(text)
    }
    const addButtonHandler = () => {
        if (inputTitle) {
            props.addTodoHandler(inputTitle)
            setInputTitle('')
        } else {
            Alert.alert('Require title todo!')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       value={inputTitle}
                       onChangeText={onChangeHandler}
                       placeholder={"Input title todo"}
                       autoCorrect={false}
                       autoCapitalize={'none'}
                       autoFocus={true}
            />
            <Button title={'Add'} onPress={addButtonHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 15,

    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        padding: 10,

    }
})