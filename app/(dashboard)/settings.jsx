import { StyleSheet, Text, View, Platform, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import DifficultySelector from '../../components/DifficultySelector'
import Dropdown from '../../components/DropDown'
import LanguagesDropDown from '../../components/LanguagesDropDown'
import Spacer from '../../components/Spacer'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";


const settings = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light 
  const userName = "Shani Halali";
  const userEmail = "shanihlli1234@gmail.com";
  const [difficulty, setDifficulty] = useState("Easy");
  const [languages, setLanguages] = useState([]);

  return (
<ThemedView style={styles.container}>
<ThemedText style={styles.title}>Game Settings</ThemedText>
<Spacer/>

{/*User info */}
<View style={[styles.inputs,{backgroundColor: theme.uiBackground, color: theme.text,padding: 20,}]}>
  <ThemedText style={{fontSize: 20 , marginBottom: 10}}>Name: {userName}</ThemedText>
  <ThemedText style={{fontSize: 20}}>Email: {userEmail}</ThemedText>
  <Text></Text>
</View>

<Spacer height={20}/>

{/*Language*/}
    <LanguagesDropDown
    onChange={setLanguages}
    >
    </LanguagesDropDown>

<Spacer height={20}/>

{/*Difficulty */}
    <DifficultySelector
    value={difficulty}
    onChange={setDifficulty}
    >
    </DifficultySelector>


</ThemedView>
  )
}

export default settings

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
     inputs: {
        width: '80%',
        height: '15%',
        marginBottom: 5,
        alignSelf: "center",
        borderRadius: 6,
        fontFamily: fontFamilyPlatform,

  },
})