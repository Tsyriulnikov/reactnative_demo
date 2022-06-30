import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar'
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./src/store/store";
import {addTodoListAC} from "./src/store/todolists-reducer";
import {Box, Center, Fab, Icon, useTheme} from "native-base";
import { AntDesign } from '@expo/vector-icons';



export type TodolistType = {
    id: string
    title: string
}

export function Main() {
    const dispatch = useDispatch()
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)

    const addTodoHandler = (title: string) => {
        dispatch(addTodoListAC(title))
    }
    const removeTodo = (id: string) => {
        // setTodos((prev)=>prev.filter((todo)=>id!==todo.id))
    }

    return (

        <View>
            <Navbar title={'Fuck'}/>
            <View style={styles.container}>

                <AddTodo addTodoHandler={addTodoHandler}/>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todolists}
                    renderItem={({item}) => (<Todo id={item.id}
                                                   title={item.title}
                                                   callBackRemove={removeTodo}/>)}
                />

            </View>

</View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,

    },

});

const Example = () => {
    // const theme = useTheme()

    return <Center>
        {/*<Box height="200" w="400" shadow="2" rounded="lg" _dark={{*/}
        {/*    bg: "coolGray.200:alpha.20"*/}
        {/*}} _light={{*/}
        {/*    bg: "coolGray.200:alpha.20"*/}
        {/*}}>*/}
            <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
        {/*</Box>*/}
    </Center>;
};
