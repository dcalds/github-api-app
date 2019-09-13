import React, { useState, useEffect, useRef } from 'react';

import {
  View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, Animated, Keyboard
} from 'react-native';

export default function Main({ navigation }) {

  const [username, setUsername] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false) // false = inicio // true = mostra user ou erro
  const [validation, setValidation] = useState("Pesquise usuários do GitHub")
  const [validationColor, setValidationColor] = useState("black")
  const [savedUsers, setSavedUsers] = useState([])

  // [START ANIMATION]
  // const Box = ({ scale = 1 }) => (

  //   <Animated.Image
  //     source={require('../../assets/cat.jpg')}
  //     style={[
  //       {
  //         width: 150,
  //         height: 150,
  //         backgroundColor: 'black',
  //         borderRadius: 150,
  //         marginBottom: 15,
  //         transform: [{ scale }],
  //       },
  //     ]}
  //   />
  // );

  // const usePulse = (startDelay = 500) => {
  //   const scale = useRef(new Animated.Value(1)).current;

  //   const pulse = () => {
  //     Animated.sequence([
  //       Animated.timing(scale, { toValue: 1.02 }),
  //       Animated.timing(scale, { toValue: 0.98 }),
  //     ]).start(() => pulse());
  //   };

  //   useEffect(() => {
  //     const timeout = setTimeout(() => pulse(), startDelay);
  //     return () => clearTimeout(timeout);
  //   }, []);

  //   return scale;
  // };

  // const scale = usePulse();
  // [END ANIMATION]

  // async function loadRandomUser() {
  //  const url = 'https://api.randomuser.me/';
  //  const response = await fetch(url);
  //  const data = await response.json();
  //  setUserData(data.results[0])
  //  setLoading(true)
  // }  

  // MUDA O HOOK DE NOME DE USUÁRIO EM TEMPO REAL
  function searchUsername(newUser) {
    setUsername(newUser)
  }

  // VERIFICA SE NÃO HÁ NADA ESCRITO NO CAMPO DE TEXTO
  function verifyEmpity() {

    // Esconder teclado
    Keyboard.dismiss()

    // CASO NÃO SEJA VAZIO, É LIBERADO O ACESSO PARA A API
    if (username !== null) {
      loadGithubUser()
    }
    else {
      // SENDO NULO OU VAZIO
      errorInSearch()
    }
  }

  // MOSTRA ERRO AO BUSCAR
  function errorInSearch() {
    setValidation("Usuário Inválido")
    setValidationColor("tomato")
    setLoading(false)
  }

  // FUNÇÃO ASSÍNCRONA PARA REQUISITAR API DO GITHUB
  async function loadGithubUser() {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data)
    setLoading(true)
  }

  // LIMPA E RESETA OS HOOKS PARA O ESTADO INICIAL
  function clear() {
    setLoading(false)
    setValidation("Pesquise outro usuário")
    setValidationColor("black")
    setUsername(null)
    setUserData(null)
  }

  // SALVA USUÁRIO
  function saveUserData() {
    setSavedUsers([...savedUsers, username])
  }

  return (

    <>

      <TouchableOpacity onPress={() => navigation.navigate('Profile', { savedUsers })}>
        <Image
          style={{ width: 28, height: 28, marginTop: 15, marginLeft: 15 }}
          source={require('../../assets/gear.png')}
        />
      </TouchableOpacity>

      <View style={styles.container}>

        {

          // CASO O O CARREGAMENTO SEJA TROCADO PARA FALSO, IRÁ RENDERIZAR A TELA DE USUÁRIO
          (loading === false)

            ?

            // [START BUSCA INICIAL]
            <>
              { /* <Box scale={scale} /> */}

              <Text style={{
                color: validation,
                fontSize: 16,
                fontWeight: "bold",
                color: validationColor
              }}> {validation} </Text>

              <View style={styles.viewInput}>
                <TextInput
                  style={styles.txtInput}
                  onChangeText={searchUsername}
                  placeholder="Digite aqui"
                  clearButtonMode='always'
                />
              </View>

              <TouchableOpacity style={styles.btn} onPress={verifyEmpity}>
                <Text style={styles.txt}>Buscar</Text>
              </TouchableOpacity>

            </>
            // [END BUSCA INICIAL]

            :

            // [START RESULTADO DA BUSCA]
            <>

              {

                // O nome de usuário existe?
                (userData.login)

                  ?

                  // Se existir, suas informações são carregadas
                  <>

                    <Image
                      style={{ width: 150, height: 150, borderRadius: 150, marginBottom: 15 }}
                      source={{ uri: userData.avatar_url }}
                    />

                    <View style={{
                      height: 60,
                      width: 250,
                      display: "flex",

                      alignItems: "center"
                    }}>
                      <Text style={styles.txtBlack}> {userData.name} </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#444444"
                        }}
                      >
                        Has {userData.followers} followers and follows {userData.following} users
                      </Text>
                      <Text style={{
                        fontSize: 10,
                        color: "#444444"
                      }}> {userData.location} </Text>
                    </View>

                    <View style={styles.viewInput}>
                      <TextInput
                        style={styles.txtInput}
                        onChangeText={searchUsername}
                        placeholder="Digite aqui um usuário"
                      />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={verifyEmpity}>
                      <Text style={styles.txt}>Buscar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveBtn} onPress={saveUserData}>
                      <Text style={styles.saveTxt}>Salvar Usuário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.clearBtn} onPress={clear}>
                      <Text style={styles.clearTxt}>Clear</Text>
                    </TouchableOpacity>

                    {
                      savedUsers != []

                      ?

                      savedUsers.map((element, index) => { return <Text key={index}> {element} </Text> })

                      :

                      <Text>Não tem nada aqui</Text>
                    }

                  </>

                  :

                  // Usuário não encontrado
                  errorInSearch()

              }

            </>
          // [END RESULTADO DA BUSCA]

        }
      </View>

    </>
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
    marginBottom: 5
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
  },
  saveBtn: {
    height: 50,
    width: 250,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  saveTxt: {
    fontSize: 16,
    color: "green"
  }
});