import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

export default function Apps() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}> Página de Aplicativos </Text>
        </View>
    );
}

const corDestaque = "black"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: corDestaque,
    },
    txt: {
        color: "white",
        fontSize: 18
    }
});