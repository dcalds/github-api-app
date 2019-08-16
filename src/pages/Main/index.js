import React, { useState, useEffect, useRef } from 'react';

import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Animated
} from 'react-native';

export default function Main() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("dcalds") // Set a username to develop
  const [validation, setValidation] = useState("Pesquise usuários do GitHub")
  const [validationColor, setValidationColor] = useState("black")

  // [START ANIMATION]
  const Box = ({ scale = 1 }) => (

    <Animated.Image
      source = { require('../../assets/cat.jpg') }
      style={[
        {
          width: 150,
          height: 150,
          backgroundColor: 'black',
          borderRadius: 150,
          marginBottom: 15,
          transform: [{ scale }],
        },
      ]}
    />
  );

  const usePulse = (startDelay = 500) => {
    const scale = useRef(new Animated.Value(1)).current;

    const pulse = () => {
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.02 }),
        Animated.timing(scale, { toValue: 0.98 }),
      ]).start(() => pulse());
    };

    useEffect(() => {
      const timeout = setTimeout(() => pulse(), startDelay);
      return () => clearTimeout(timeout);
    }, []);

    return scale;
  };

  const scale = usePulse();
  // [END ANIMATION]

  async function loadRandomUser() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    setUser(data.results[0])
    setLoading(false)
  }

  function verifyEmpity() {
    if (username !== null || username === ' ') {
      loadGithubUser()
    }
    else {
      setValidation("Usuário Inválido")
      setValidationColor("tomato")
    }
  }

  function searchUsername(newUser) {
    setUsername(newUser)
  }
  function clear() {
    setLoading(true)
    setValidation("Pesquise outro usuário")
    setValidationColor("black")
  }

  async function loadGithubUser() {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    setUser(data)
    setLoading(false)
    setUsername(null)
  }

  return (
    <View style={styles.container}>
      {
        (loading === true || user === null)
          ?
          <>
            <Box scale={scale} />

            <Text style={{
              color: validation,
              fontSize: 16,
              color: validationColor
            }}> {validation} </Text>

            <View style={styles.viewInput}>
              <TextInput
                style={styles.txtInput}
                onChangeText={searchUsername}
                placeholder="Digite aqui um user"
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={verifyEmpity}>
              <Text style={styles.txt}>Buscar</Text>
            </TouchableOpacity>

          </>
          :
          <>

            <Image
              style={{ width: 150, height: 150, borderRadius: 150, marginBottom: 15 }}
              source={{ uri: user.avatar_url }}
            />

            <View style={{
              height: 60,
              width: 250, 
              display: "flex",
              alignItems: "center"
              }}>
              <Text style={styles.txtBlack}> {user.name} </Text>
              <Text
                style={{
                  fontSize: 10, 
                  color: "#444444"
                }}              
              > 
              Has {user.followers} followers and follows {user.following} users
              </Text>
              <Text style={{ 
                fontSize: 10, 
                color: "#444444"
              }}> {user.location} </Text>              
            </View>

            <View style={styles.viewInput}>
              <TextInput
                style={styles.txtInput}
                onChangeText={searchUsername}
                placeholder="Digite aqui um usuário"
              />
            </View>

            <TouchableOpacity style={styles.btn} onPress={loadGithubUser}>
              <Text style={styles.txt}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearBtn} onPress={clear}>
              <Text style={styles.clearTxt}>Clear</Text>
            </TouchableOpacity>

          </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 16,
    color: "white"
  },
  txtBlack: {
    fontSize: 16,
    color: "black",
    marginBottom:5
  },
  txtInput: {
    marginLeft: 20
  },
  viewInput: {
    backgroundColor: "#e1e8ee",
    height: 50,
    width: 250,
    borderRadius: 8,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btn: {
    backgroundColor: "black",
    height: 50,
    width: 250,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  clearBtn: {
    height: 50,
    width: 250,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "tomato",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  clearTxt: {
    fontSize: 16,
    color: "tomato"
  }
});