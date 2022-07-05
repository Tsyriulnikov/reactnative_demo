import {authAPI} from "../api/todolists-api";
import {Dispatch} from "redux";
import {setIsLoggedInAC} from "./login-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false,
    isOpenTasks: false,
    idCurrentTodo: '',
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        case "APP/SET-OPEN-TASKS":
            return {...state, isOpenTasks: action.isOpenTasks}
        case "APP/SET-ID-CURRENT-TODO":
            return {...state, idCurrentTodo: action.idCurrentTodo}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
    isOpenTasks: boolean
    idCurrentTodo: string
}
//AC
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZED', isInitialized} as const)
export const setOpenTasksAC = (isOpenTasks: boolean) => ({type: 'APP/SET-OPEN-TASKS', isOpenTasks} as const)
export const setIdCurrentTodoAC = (idCurrentTodo: string) => ({type: 'APP/SET-ID-CURRENT-TODO',idCurrentTodo } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetInitializedActionType = ReturnType<typeof setInitializedAC>
export type setIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type setIsOpenTasksActionType = ReturnType<typeof setOpenTasksAC>
export type setIdCurrentTodoIActionType = ReturnType<typeof setIdCurrentTodoAC>


//TS


export const initializeAppTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true));

            } else {
                handleServerAppError(res.data, dispatch)
            }
            dispatch(setInitializedAC(true));
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {

                dispatch(setIsLoggedInAC(false))

                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}


type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetInitializedActionType
    | setIsLoggedInActionType
    | setIsOpenTasksActionType
    | setIdCurrentTodoIActionType
