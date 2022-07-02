import React, {useCallback} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
// import {TodosType} from "../../Main";

type TodoPropsType = {
    title: string
    id: string
    // callBackRemove: (id: string) => void
}
export const Todo = (props: TodoPropsType) => {

    const handlLongPress = () => {
        // props.callBackRemove(props.id)
    }
    return (
        <TouchableOpacity
            // onLongPress={() => handlLongPress()}
            // onLongPress={props.callBackRemove.bind(null,props.id)}

            onPress={() => console.log('Pressed ', props.id)}>
            <View style={styles.todo}>
                <Text>{props.id} {props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        todo: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 5,
            marginBottom: 10,
        }
    }
)