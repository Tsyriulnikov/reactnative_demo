import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {Navbar} from './src/components/Navbar'
import {AddTodo} from "./src/components/AddTodo";
import {useState} from "react";
import { v1 } from 'uuid';
import {Todo} from "./src/components/Todo";

export type todosType={
    id:string
    title:string
}
export default function App() {
    const [todos, setTodos] = useState<Array<todosType>>([])
    const addTodoHandler = (title: string) => {

        // const newTodo = {
        //     id: Date.now().toString(),
        //     title: title
        // }
        // setTodos([...todos, newTodo])
        setTodos(prev=>[
            ...prev,
            {
                    id: v1(),
                    title: title
            }
        ])
    }


    return (
        <View>
            <Navbar title={'Fuck'}/>
            <View style={styles.container}>
                <AddTodo addTodoHandler={addTodoHandler}/>
            </View>
            {todos.map(el=><Todo id={el.id} title={el.title}/>)}
            {/*{todos.map(el=><Text key={el.id}>{el.title} </Text>)}*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,

    },

});
