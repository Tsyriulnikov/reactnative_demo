import {TodolistType} from "../../Main";

const initialState:Array<TodolistType>=[]


export const todolistsReducer = (state=initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id !== action.id)
        }
        case "ADD-TODOLIST": {

            let newTodolist: TodolistType = {id: action.id, title: action.title};


            return [newTodolist, ...state];
        }

        default:
            return state
    }
}

// Action creators
// export const removeTodoListAC= (todoListId:string):RemoveTodoListActionType =>{
//     return {type: "REMOVE-TODOLIST", id: todoListId}
// }
export const addTodoListAC= (title:string)=>{
    return {type: "ADD-TODOLIST", title, id:Date.now().toString(),}
}


//Types
type ActionsType = AddTodolistActionType

type AddTodolistActionType=ReturnType<typeof addTodoListAC>