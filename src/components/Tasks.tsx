import {Button, Center, Heading, HStack, Modal, Spinner, Text, View} from "native-base";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {initializeAppTC, setIdCurrentTodoAC, setOpenTasksAC} from "../store/app-reducer";
import {fetchTasksTC, TasksStateType} from "../store/tasks-reducer";
import {FlatList, SafeAreaView} from "react-native";
import {Todo} from "./Todo";
import {ShowTasks} from "./ShowTasks";

export const Tasks = () => {
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const showModal = useSelector<AppRootStateType, boolean>(state => state.app.isOpenTasks)
    const idCurrentTodo = useSelector<AppRootStateType, string>(state => state.app.idCurrentTodo)
    const status = useSelector<AppRootStateType, string>(state => state.app.status)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const setShowModal = () => {
        dispatch(setOpenTasksAC(false))
    }
    // let allTodolistTasks = tasks[idCurrentTodo]
    //  console.log(tasks)


    let allTodolistTasks = tasks
    console.log(allTodolistTasks[idCurrentTodo])
    // console.log(allTodolistTasks[0].title)
    // if (typeof tasks[idCurrentTodo] !== "undefined") console.log(allTodolistTasks)
    // if (status==='loading') {
    //     return (
    //         <HStack space={2} justifyContent="center">
    //             <Spinner accessibilityLabel="Loading posts"/>
    //             <Heading color="primary.500" fontSize="md">
    //                 Loading
    //             </Heading>
    //         </HStack>
    //     )};

    return <Center>
        <Modal isOpen={showModal} onClose={setShowModal}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton/>
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                    {/*{status !== 'succeeded' && <Text>dffdf</Text>}*/}
                    {/*{typeof allTodolistTasks[] !== "undefined" && <Text>dffdf</Text>}*/}
                    {/*{allTodolistTasks[idCurrentTodo].map(el => <Text>{el.title}</Text>)}*/}
                    {/*<Text>{allTodolistTasks[0].title} </Text>*/}
                    {/*<SafeAreaView style={{flex: 1}}>*/}
                    {/*<FlatList*/}
                    {/*    keyExtractor={item => item.id}*/}
                    {/*    data={tasks[idCurrentTodo]}*/}
                    {/*    renderItem={({item}) => (<ShowTasks/>)}*/}
                    {/*    // renderItem={({item}) => (<View><Text>{item.title}</Text></View>)}*/}
                    {/*/>*/}

                    {/*</SafeAreaView>*/}


                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={setShowModal}>
                            Cancel
                        </Button>
                        <Button onPress={setShowModal}>
                            Save
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    </Center>;
};