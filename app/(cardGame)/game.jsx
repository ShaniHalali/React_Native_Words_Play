import { StyleSheet, Text, View, Platform, useColorScheme, Image } from 'react-native'
import React, { use, useState } from 'react'
import {Colors} from '../../constants/Color'
import  ChildrenImage from '../../assets/image/childrenHome.png'
//components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { Link, router } from 'expo-router'
import childImage from '../../assets/image/game_child.png'

const fontFamilyPlatform =  Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";


const game = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light 
    const [score, setScore] = useState(0);
    const [life, setLife] = useState("❤️❤️❤️")
    const [time, setTime] = useState(5)
  return (
    <ThemedView mode={'game'} style={styles.container}>

    <View style={styles.status}>
     <ThemedText style={{fontSize: 35}}>Score: {score}</ThemedText>
     <ThemedText style={{fontSize: 35}}>{life}</ThemedText>
    </View>

    <ThemedText style={{fontSize: 40}}>⏳: {time}</ThemedText>

    <Spacer height={10}/>
    {/* Card*/}
    <View style={[styles.card,{backgroundColor: theme.cardBackground, color: theme.text,padding: 20,}]}>
        <Spacer height={20}/>
        <Image source = {childImage} style={styles.image}/>
    
        <ThemedText style={styles.word}>Word </ThemedText>
        <ThemedText style={styles.word}>מילה </ThemedText>

        {/* Buttons*/}
      <View style={styles.buttons}>
      <ThemedButton
       title="Worng"
       color= "#fc3d39"
      >
      <Text>Worng</Text>
      </ThemedButton>

       <ThemedButton
       title="Correct"
       color= "#3bcf5e"
      >
      <Text>Correct</Text>
      </ThemedButton>
      </View>
    </View>


 
    <Link href={"/home"} style={styles.title}> Home </Link>
    </ThemedView>

  )
}

export default game

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
        width: "100%",
        alignItems: 'center',
      },
        image: {
            width: 300,
            height: 200,
            resizeMode: 'contain',
        },
        status: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        },
        card: {
            width: '80%',
            height: '70%',
            marginBottom: 5,
            alignSelf: "center",
            borderRadius: 6,
            fontFamily: fontFamilyPlatform,

    },
        word: {
            fontWeight: 'bold',
            fontSize: 50,
            fontFamily: fontFamilyPlatform,
            alignSelf: 'center',
            alignItems: 'center',
        }
})