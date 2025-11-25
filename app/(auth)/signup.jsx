import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Platform, Alert  } from 'react-native'
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
import DifficultySelector from '../../components/DifficultySelector'
import LanguagesDropDown from '../../components/LanguagesDropDown'
import { registerUser } from '../../services/authService'
const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("Easy");
  const [languages, setLanguages] = useState([]);

  const router = useRouter();

  const onPressLogIn= () => {
    router.push("/")
  }

  const onPressSignup = () => {
      // validate empty fields
  if (!email || !password || !name || languages.length === 0) {
    Alert.alert("Please fill all fields");
    return;
  } 

  // validate email format
  const emailRegex = /\S+@\S+\.\S+/;
   if (!emailRegex.test(email)) {
    Alert.alert("Invalid Email","Please enter a valid email");
    return;
  }

  // validate password length
  if (password.length < 6) {
    Alert.alert("Weak Password","Password must be at least 6 characters");
    return;
  }

  handleSignUp();

  }

  const handleSignUp = async () => {

  try {
    // create user using Firebase
    const userCredential = await registerUser(email, password);

    // you can save name or difficulty or languages in Firestore later
    console.log("User created:", userCredential.user.uid);

    // go to home
    router.replace("/home");
  } catch (error) {
    console.log("Register error = ",error.message);
    if (error.code === "auth/email-already-in-use") {
      Alert.alert(
        "Email Already Registered",
        "There is already an account using this email, Try logging in or use another email."
      );
    } else {
      alert(error.message);

    }
  }
};

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
    <LanguagesDropDown
    style={{color: "#f7a930",}}
    onChange={setLanguages}
    >
    </LanguagesDropDown>

    {/*Difficulty */}
    <DifficultySelector
    style={{color: "#f7a930",}}
    value={difficulty}
    onChange={setDifficulty}
    >
    </DifficultySelector>

   
    {/* Buttons*/}
      <View style={styles.buttons}>

       <ThemedButton
       onPress={onPressSignup}
       title="Sign Up"
      >
      <Text>Sign Up</Text>
      </ThemedButton>

      <ThemedButton
       onPress={onPressLogIn}
       title="Log In"
       color= "#3bcf5e"

      >
      <Text>Alredy have an account</Text>
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
        justifyContent: "space-between",
        paddingHorizontal: 0,
        width: "80%",
        alignItems: 'center',
      },
      inputs: {
        width: '80%',
        marginBottom: 5,
      },
    })