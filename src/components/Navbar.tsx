import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from "native-base";
import {logoutTC} from "../store/app-reducer";
import {useDispatch} from "react-redux";

type navbarPropsType = {
    title: string
}
export const Navbar = (props: navbarPropsType) => {
    const dispatch=useDispatch()
    const handlerOnPressLogOut = () => {
        dispatch(logoutTC() as any)
    }
    return (
        <View style={styles.navbar}>
            {/*<Text style={styles.text}>{props.title}</Text>*/}
            <Button onPress={handlerOnPressLogOut}>LogOut</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        // paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})