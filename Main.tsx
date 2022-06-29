import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar'
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./src/store/store";
import {addTodoListAC} from "./src/store/todolists-reducer";

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
