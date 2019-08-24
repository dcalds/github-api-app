import React, { useState, useEffect, useRef } from 'react';

import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated, Keyboard, ScrollView
} from 'react-native';

export default function Profile({ navigation }) {

    const [savedUsers, setSavedUsers] = useState(["Danilo Caldas", "Danilo Caldas","Danilo Caldas","Danilo Caldas","Danilo Caldas","Danilo Caldas","Danilo Caldas","Danilo Caldas","Danilo Caldas"])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>

                {
                    savedUsers.map( (element, index) => {
                            return (<TouchableOpacity style={styles.card} key={index}>
                                        <Image
                                            style={{height: 40, width: 40, borderRadius: 50}}
                                            source={{ uri: "https://avatars3.githubusercontent.com/u/31120411?s=460&v=4" }}
                                        />
                                        <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 20}}>
                                            {element}
                                        </Text>
                                    </TouchableOpacity>)
                        } 
                    )
                }

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black"
    },
    cardContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "90%",
        height: 60,
        borderRadius: 5,
        backgroundColor: "white",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});