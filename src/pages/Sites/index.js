import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default function Sites() {

    // consertar o fato de ao conferir um projeto, todos abrem
    const [tam, setTam] = useState(300)
    const [high, setHigh] = useState(200)
    const [textButton, setTextButton] = useState("Confira este projeto")
    const [colorButton, setColorButton] = useState(corDestaque)
    const [esconder, setEsconder] = useState(false)
    const [indiceApertado, setIndiceApertado] = useState(0)

    var users = [
        'https://avatars3.githubusercontent.com/u/31120411?s=460&v=4',
        'https://avatars3.githubusercontent.com/u/12154623?s=460&v=4',
        'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        'https://avatars1.githubusercontent.com/u/44952113?s=460&v=4',
        'https://avatars0.githubusercontent.com/u/9610091?s=460&v=4',
        'https://avatars1.githubusercontent.com/u/86836?s=460&v=4',
        'https://avatars3.githubusercontent.com/u/4248081?s=460&v=4',
    ]

    const conferirProj = () => {
        setTam(600);
        setHigh(510);
        setTextButton("Diminuir");
        setColorButton("tomato");
        setEsconder(true)
    }


    const escondeProj = () => {
        setTam(300);
        setHigh(200);
        setTextButton("Confira este projeto");
        setColorButton(corDestaque);
        setEsconder(false)
    }


    return (
        <ScrollView style={styles.scroll}>

            {/* {
                (users != [])

                ?

                users.map( function(element, index){                    
                    
                return (
                    <View key={index} style={styles.cardContainer}>
                            <View style={{
                                backgroundColor: "white",
                                height: tam,
                                width: "90%",
                                borderRadius: 15,
                                margin: 0,
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <Image
                                    source={{ uri: element }}
                                    style={{
                                        height: high,
                                        width: "90%",
                                        borderRadius: 15,
                                        marginTop: 15,
                                        marginBottom: 15
                                    }}
                                />
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "transparent",
                                        borderWidth: 2,
                                        borderColor: colorButton,
                                        height: 50,
                                        width: "90%",
                                        borderRadius: 11,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    onPress={
                                        (esconder === false)
                                            ?
                                            conferirProj
                                            :
                                            escondeProj
                                    }>
                                    <Text style={{
                                        color: colorButton,
                                        fontSize: 14
                                    }}>
                                        {textButton} {index}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        );                   
                    
                })

                :

                    (<View style={styles.viewFail}>
                        <Text style={styles.txtFail} >
                            Projetos em construção
                    </Text>
                    </View>)
            } */}

        </ScrollView>
    );
}


const corDestaque = "black"

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: corDestaque,
    },
    txt: {
        color: "white",
        fontSize: 18
    },
    cardContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 10
    },
    card: {
        backgroundColor: "white",
        height: 300,
        width: "90%",
        borderRadius: 15,
        margin: 10,
        display: "flex",
        alignItems: "center"
    },
    btn: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: corDestaque,
        height: 50,
        width: "90%",
        borderRadius: 11,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    txtBtn: {
        color: corDestaque,
        fontSize: 14
    },
    img: {
        height: 200,
        width: "90%",
        borderRadius: 15,
        marginTop: 15,
        marginBottom: 15
    },
    txtFail: {
        color: "white",
        fontSize: 16
    },
    viewFail: {
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});