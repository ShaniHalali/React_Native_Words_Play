import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import DifficultySelector from '../../components/DifficultySelector'
import Dropdown from '../../components/DropDown'
import LanguagesDropDown from '../../components/LanguagesDropDown'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const settings = () => {
  const userName = "Shani Halali";
  const userEmail = "shani@gmail.com";
  const [difficulty, setDifficulty] = useState("Easy");
  const [languages, setLanguages] = useState([]);

  return (
<ThemedView style={styles.container}>
<ThemedText style={styles.title}>Game Settings</ThemedText>

{/*User info */}
<View >
  <ThemedText>Name: {userName}</ThemedText>
  <ThemedText>Email: {userEmail}</ThemedText>
  <Text></Text>
</View>

{/*Language*/}
    <LanguagesDropDown
    onChange={setLanguages}
    >
    </LanguagesDropDown>


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
})