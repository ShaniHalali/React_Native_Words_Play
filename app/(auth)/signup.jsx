import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Platform  } from 'react-native'
import React, { useState, useEffect  } from 'react'
import {Colors} from '../../constants/Color'
import {useRouter} from "expo-router"
// components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemeText'
import ThemeTextInput from '../../components/ThemeTextInput'
import ThemedButton from '../../components/ThemedButton'
import ThemedLogo from '../../components/ThemedLogo'
import Segment from '../../components/Segment'
import DropDown from '../../components/DropDown'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("Easy");
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const router = useRouter();

  const onPressLogIn= () => {
    router.push("/")
  }

useEffect(() => {
  const aiLanguages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "Japanese", value: "ja" },
    { label: "German", value: "de" },
  ];

  setLanguages(aiLanguages);
}, []);



  return (

     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={[styles.container ]}>
      <ThemedLogo />
      <ThemedText title={true} style={[styles.title, {color: "#f7a930"}]}>Sign Up</ThemedText>

      <ThemedText  style={[styles.title, {color: "#f7a930", fontSize: 25, alignSelf: "flex-start", marginLeft: 35}]}> Email:</ThemedText>
        <ThemeTextInput
        style={styles.inputs}
        placeholder= "Email"
        keyboardType= "email-address"
        onChangeText= {setEmail}
        value= {email}
         />

      <ThemedText  style={[styles.title, {color: "#f7a930", fontSize: 25, alignSelf: "flex-start", marginLeft: 35}]}> Name:</ThemedText>
        <ThemeTextInput
        style={styles.inputs}
        placeholder= "Name"
        keyboardType= "Name"
        onChangeText= {setName}
        value= {name}
         />

      <ThemedText  style={[styles.title, {color: "#f7a930", fontSize: 25, alignSelf: "flex-start", marginLeft: 35}]}> Password:</ThemedText>
        <ThemeTextInput
        style={styles.inputs}
        placeholder= "Password"
        keyboardType= "password"
        onChangeText= {setPassword}
        value= {password}
         />

    {/*Languages */}
    <ThemedText  style={[styles.title, {color: "#f7a930", fontSize: 25, alignSelf: "flex-start", marginLeft: 35}]}> Learning Language:</ThemedText>
    <DropDown
      style={[styles.inputs, {marginTop: 10}]}
      data={languages}
      placeholder="Choose language"
      onChange={(item) => setSelectedLanguage(item)}
    />

    {/*Difficulty */}
    <ThemedText  style={[styles.title, {color: "#f7a930", fontSize: 25, alignSelf: "flex-start", marginLeft: 35}]}> Difficulty:</ThemedText>
    <View style={{ flexDirection: "row", alignSelf: "flex-start", marginLeft: 35, padding: 5 }}>
      <Segment
        label="Easy"
        selected={difficulty === "Easy"}
        onPress={() => setDifficulty("Easy")}
      />
      <Segment
        label="Mid"
        selected={difficulty === "Mid"}
        onPress={() => setDifficulty("Mid")}
      />
      <Segment
        label="Pro"
        selected={difficulty === "Pro"}
        onPress={() => setDifficulty("Pro")}
      />
    </View>
   
    {/* Buttons*/}
      <View style={styles.buttons}>

       <ThemedButton
      
       title="Sign Up"
       color= "#3bcf5e"
      >
      <Text>Sign Up</Text>
      </ThemedButton>

      <ThemedButton
       onPress={onPressLogIn}
       title="Log In"
      >
      <Text>Log In</Text>
      </ThemedButton>

      </View>
      </ThemedView>
    </TouchableWithoutFeedback>





  )
}

export default signup

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: fontFamilyPlatform,
   
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
  },
  buttons: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 80,
    alignItems: 'center',
  },
  inputs: {
    width: '80%',
    marginBottom: 5,
  },
})