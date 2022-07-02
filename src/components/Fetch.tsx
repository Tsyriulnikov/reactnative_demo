import React from "react";
import {Box, Button} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodolistsTC} from "../store/todolists-reducer";
import {AppRootStateType} from "../store/store";
import {TodolistType} from "./Main";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {AddTodo} from "./AddTodo";
import {Todo} from "./Todo";

export const Fetch = () =>{
const dispatch=useDispatch()
    const todolists=useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const handlerOnPress=()=>{
    dispatch(fetchTodolistsTC() as any)
}
        return <Box alignItems="center">
            <Button onPress={handlerOnPress}>Click Me</Button>
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todolists}
                    renderItem={({item}) => (<Todo id={item.id}
                                                   title={item.title}
                                                /> )}
                />
                </SafeAreaView>
            </View>
        </Box>;

}


const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 30,
        // paddingVertical: 20,

    },

});