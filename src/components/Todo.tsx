import React, {useCallback, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Stack, Button, Icon, HStack} from "native-base";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {removeTodolistTC} from "../store/todolists-reducer";
import {Tasks} from "./Tasks";
import {setIdCurrentTodoAC, setOpenTasksAC} from "../store/app-reducer";
import {fetchTasksTC} from "../store/tasks-reducer";

type TodoPropsType = {
    title: string
    id: string
}
export const Todo = (props: TodoPropsType) => {
    const dispatch = useDispatch()

    const handlLOnPressDelete = () => {
        dispatch(removeTodolistTC(props.id) as any)
    }

    const handlPressTodo = () => {
        dispatch(setIdCurrentTodoAC(props.id))
        // dispatch(fetchTasksTC(props.id) as any)
        dispatch(setOpenTasksAC(true))

    }
    useEffect(() => {

        dispatch(fetchTasksTC(props.id) as any)
    }, [])


    return (
        <Stack space={3} alignItems="center">

            <HStack space={3} alignItems="center">

                <TouchableOpacity
                    onPress={handlPressTodo}
                >
                    <View style={styles.todo}>
                        <Text>{props.title}</Text>

                    </View>
                </TouchableOpacity>

                <Button startIcon={<Icon as={MaterialCommunityIcons} name="pencil-outline" size={4}/>}
                        onPress={handlLOnPressDelete}
                />
                <Button startIcon={<Icon as={MaterialCommunityIcons} name="trash-can-outline" size={4}/>}
                        onPress={handlLOnPressDelete} colorScheme={'amber'}
                />
            </HStack>
        </Stack>
    )
}

const styles = StyleSheet.create(
    {
        todo: {
            // justifyContent:'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderWidth: 1,
            borderColor: "#eee",
            borderRadius: 5,
            marginBottom: 10,
            flex: 1,
            // textAlign:'left'
            width: 200
        }
    }
)



