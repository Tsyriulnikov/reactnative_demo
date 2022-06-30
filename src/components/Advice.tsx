import React from 'react';
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";

export function Advice() {
    const [advice, setAdvice] = useState("");

    const getRandomId = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() *
            (max - min + 1)) + min).toString();
    };

    const getAdvice = () => {
        axios
            .get("http://api.adviceslip.com/advice/" +
                getRandomId(1, 200))
            .then((response) => {
                setAdvice(response.data.slip.advice);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.advice}>{advice}</Text>
            <Button title="Get Advice"
                    onPress={getAdvice} color="green"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    advice: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,

    },
});
