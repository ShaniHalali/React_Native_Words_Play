import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Color'
import  ChildrenImage from '../../assets/image/childrenHome.png'
//components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { router } from 'expo-router'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";


const home = () => {
    const userScore = 0;
    const userLanguage = "English";

    const onPressLogIn = () => {
        router.push("/game")
    }

  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>🏆 : {userScore}</ThemedText>
        <ThemedText style={styles.title}>Learn {userLanguage}</ThemedText>

        <Spacer/>
        <Image source = {ChildrenImage} style={styles.image}/>
        <Spacer/>

     <ThemedButton
       onPress={onPressLogIn}
       title="start"
       color= "#3bcf5e"
      >
      <Text>Start Learning</Text>
      </ThemedButton>


    </ThemedView>

  )
}

export default home

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
        gap: 80,
        alignItems: 'center',
      },
        image: {
            width: 300,
            height: 200,
            resizeMode: 'contain',
        },
})