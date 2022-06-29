import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar'
import {AddTodo} from "./src/components/AddTodo";
import {useState} from "react";
import {Todo} from "./src/components/Todo";
import {Provider} from "react-redux";
import {store} from "./src/store/store";


export type TodolistType = {
    id: string
    title: string
}
export default function App() {
    const [todos, setTodos] = useState<Array<TodolistType>>([])
    const addTodoHandler = (title: string) => {

        // const newTodo = {
        //     id: Date.now().toString(),
        //     title: title
        // }
        // setTodos([...todos, newTodo])
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title: title
            }
        ])
    }
const removeTodo=(id:string)=>{
    setTodos((prev)=>prev.filter((todo)=>id!==todo.id))
}

    return (
       <Provider store={store}>
        <View>
            <Navbar title={'Fuck'}/>
            <View style={styles.container}>
                <AddTodo addTodoHandler={addTodoHandler}/>

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item}) => (<Todo id={item.id}
                                                   title={item.title}
                                                   callBackRemove={removeTodo}/>)}
                />

            </View>
            {/*{todos.map(el => (<Todo key={el.id} id={el.id} todo={el}/>))}*/}
            {/*{todos.map(el=><Text key={el.id}>{el.title} </Text>)}*/}
        </View>
       </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,

    },

});
