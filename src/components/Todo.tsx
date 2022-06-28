import React from "react";
import {View, Text, StyleSheet} from "react-native";

type TodoPropsType = {
    title: string
    id:string
}
export const Todo = (props: TodoPropsType) => {
    return (
        <View>
            <Text key={props.id}>{props.id}      {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        todo: {}
    }
)