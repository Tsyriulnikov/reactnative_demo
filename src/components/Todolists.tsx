import React, {useEffect} from "react";
import {Box, Button, Heading, HStack, Spinner} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {addTodolistTC, fetchTodolistsTC} from "../store/todolists-reducer";
import {AppRootStateType} from "../store/store";
import {TodolistType} from "./Main";
import {FlatList, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {AddTodo} from "./AddTodo";
import {Todo} from "./Todo";
import {initializeAppTC, logoutTC} from "../store/app-reducer";
import {Login} from "./Login";
import {Navbar} from "./Navbar";

export const Todolists = () => {
    const dispatch = useDispatch()
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const handlerOnPress = () => {
        dispatch(fetchTodolistsTC() as any)
    }
    const handlerOnPressLogOut = () => {
        dispatch(logoutTC() as any)
    }
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC() as any)
    }, [])


    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        dispatch(fetchTodolistsTC() as any)
    }, [isLoggedIn])

    const addTodoHandler = (title: string) => {
         dispatch(addTodolistTC(title) as any)
    }

    if (!isInitialized) {
        return (
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts"/>
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        )};


    return (

        isLoggedIn ?
            <Box>
            <Navbar title={'Fuck'}/>
            <Box alignItems="center">

                {/*<Button onPress={handlerOnPress}>Click Me</Button>*/}
                <Button onPress={handlerOnPressLogOut}>LogOut</Button>
                <View style={styles.container}>

                    <AddTodo addTodoHandler={addTodoHandler}/>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={todolists}
                        renderItem={({item}) => (<Todo id={item.id}
                                                       title={item.title}
                        />)}
                    />

                </View>
            </Box>
            </Box>
            : <Login/>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,

    },

});