import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const review = () => {
  const userScore = 0;
  return (
<ThemedView style={styles.container}>
<ThemedText style={styles.title}>Review</ThemedText>
<ThemedText style={styles.title}>🏆</ThemedText>
<ThemedText style={styles.title}>Your Score</ThemedText>
<ThemedText style={styles.title}>{userScore}</ThemedText>

{/* Table view */}




</ThemedView>
  )
}

export default review

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