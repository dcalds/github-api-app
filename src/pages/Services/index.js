import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import site from '../../assets/site.png';
import play from '../../assets/play.png';
import gear from '../../assets/gear.png';
import money from '../../assets/money.png';
import automation from '../../assets/automation.png';
import ia from '../../assets/ia.png';

export default function Services({ navigation }) {

    const nome = navigation.getParam('nome');

    return (
        // <View style={styles.container}>

        <ImageBackground
            source={require('../../assets/backgroundServices.jpg')}
            style={styles.backImage}
            resizeMode="cover"
        >

            <Text style={styles.txt}> Olá, {nome != '' ? nome : 'visitante'}!</Text>
            <Text style={styles.txtSub}>Conheça nossos serviços</Text>

            <View style={styles.servicesBoxes}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Sites', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={site} />
                    <Text style={styles.boxText}>
                        Sites
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Apps', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={play} />
                    <Text style={styles.boxText}>
                        Aplicativos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Web', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={gear} />
                    <Text style={styles.boxText}>
                        Sistemas Web
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Commerce', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={money} />
                    <Text style={styles.boxText}>
                        E-commerce
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Automation', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={automation} />
                    <Text style={styles.boxText}>
                        Automação
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { navigation.navigate('Ai', {}) }}
                    style={styles.box}
                >
                    <Image style={styles.img} source={ia} />
                    <Text style={styles.boxText}>
                        IA
                    </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>

        // </View>
    );
}

const corDestaque = "black"

// "#7159c1"
// "#513F8A"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: corDestaque,
        fontSize: 18
    },
    txtSub: {
        marginTop: 5,
        color: corDestaque,
        fontSize: 16
    },
    servicesBoxes: {
        height: 500,
        width: 290,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "space-around"
    },
    box: {
        height: 135,
        width: 135,
        borderRadius: 15,
        backgroundColor: corDestaque,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: corDestaque,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    boxText: {
        color: "white",
        marginTop: 10
    },
    img: {
        height: 40,
        width: 40,
    },
    backImage: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})