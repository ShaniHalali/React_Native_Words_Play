import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Color'
import {useRouter} from "expo-router"
//theme components
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemeText'
import ThemeTextInput from '../../components/ThemeTextInput'
import ThemedButton from '../../components/ThemedButton'
import ThemedLogo from '../../components/ThemedLogo'
import { loginUser } from '../../services/authService'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();

  const onPressSignUp= () => {
    router.push("/signup")
  }

  const onPressLogIn = () => {
    //router.push("/home")
    if( !email || !password) {
      Alert.alert("Please fill all fields"); 
      return; 
    }

    handleLogin();
  }

  const handleLogin = async () => {
    try {
      //check if user exist
      const user = await loginUser(email,password);
      console.log("user exist, userID = ", user.user.uid)
      router.replace("/home")
    } catch (error) {
      console.log("Login error = ", error.message);
      Alert.alert("Invalid Email or Password")
    }
  }

  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ThemedView style={[styles.container ]}>
      <ThemedLogo style={{height: 200}} />
      <ThemedText title={true} style={[styles.title, {color: "#f7a930"}]}> Log In</ThemedText>
      <Spacer />


        <ThemeTextInput
        style={{width: '80%', marginBottom: 20}}
        placeholder= "Email"
        keyboardType= "email-address"
        onChangeText= {setEmail}
        value= {email}
        autoCapitalize="none"

         />

        <ThemeTextInput
        style={{width: '80%', marginBottom: 20}}
        placeholder= "Password"
        keyboardType= "password"
        onChangeText= {setPassword}
        value= {password}
        secureTextEntry={true}
         />
     

    {/* Buttons*/}
      <View style={styles.buttons}>
      <ThemedButton
       onPress={onPressLogIn}
       title="Log In"
      >
      <Text>Log In</Text>
      </ThemedButton>

       <ThemedButton
       onPress={onPressSignUp}
       title="Sign Up"
       color= "#3bcf5e"
      >
      <Text>Sign Up</Text>
      </ThemedButton>
      </View>



      </ThemedView>
    </TouchableWithoutFeedback>

  )
}

export default Login

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-cent',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 50,
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
        paddingHorizontal: 20,
        width: "70%",
        alignItems: 'center',
      },
})