import React, {useCallback, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {Stack, Button, Icon, HStack, Heading, Input, IconButton, Box, VStack} from "native-base";
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {removeTodolistTC} from "../store/todolists-reducer";
import {Tasks} from "./Tasks";;
import {fetchTasksTC, TasksStateType} from "../store/tasks-reducer";
import {AppRootStateType} from "../store/store";

type TodoPropsType = {
    title: string
    id: string
}
export const Todo = (props: TodoPropsType) => {
    const dispatch = useDispatch()
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const handlLOnPressDelete = () => {
        dispatch(removeTodolistTC(props.id) as any)
    }

    // const handlPressTodo = () => {
        // dispatch(setIdCurrentTodoAC(props.id))
        // // dispatch(fetchTasksTC(props.id) as any)
        // dispatch(setOpenTasksAC(true))

    // }
    useEffect(() => {

        dispatch(fetchTasksTC(props.id) as any)
    }, [])


    return (
        <Stack space={3} alignItems="center">

            <HStack space={3} alignItems="center">

                <TouchableOpacity
                    // onPress={handlPressTodo}
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

          {/*//////////////////////////////*/}

            <Box maxW="300" w="100%">
                {/*<Heading mb="2" size="md">*/}
                {/*    Wednesday*/}
                {/*</Heading>*/}
                <VStack space={4}>
                    <HStack space={2}>
                        <Input flex={1}
                            // onChangeText={v => setInputValue(v)}
                            // value={inputValue}
                               placeholder="Add Task" />
                        <IconButton borderRadius="sm" variant="solid"
                                    icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />}
                            //             onPress={() => {
                            //     addItem(inputValue);
                            //     setInputValue("");
                            // }}
                        />
                    </HStack>

                    <VStack space={2}>

            <FlatList
                keyExtractor={item => item.id}
                data={tasks[props.id]}
                // renderItem={({item}) => (<View><Text>{item.title}</Text></View>)}
                renderItem={({item}) => (<Tasks id={item.id} title={item.title}/>)}

            />


                    </VStack>
                </VStack>
            </Box>


  {/*/////////////////////////////////////////                      */}
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



