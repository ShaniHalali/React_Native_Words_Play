import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import ThemedText from './ThemeText'
import Segment from './Segment'

const fontFamilyPlatform = Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const DifficultySelector = ({ value, onChange, style }) => {
  return (
    <>
      <ThemedText style={[styles.title, style]}> Difficulty:</ThemedText>

      <View style={styles.view}>
        <Segment
          label="Easy"
          selected={value === "Easy"}
          onPress={() => onChange("Easy")}
        />
        <Segment
          label="Mid"
          selected={value === "Mid"}
          onPress={() => onChange("Mid")}
        />
        <Segment
          label="Pro"
          selected={value === "Pro"}
          onPress={() => onChange("Pro")}
        />
      </View>
    </>
  );
};


export default DifficultySelector

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: fontFamilyPlatform,
        fontSize: 25, 
        alignSelf: "flex-start", 
        marginLeft: 35,
    },
    view: {
        flexDirection: "row", 
        alignSelf: "flex-start", 
        marginLeft: 35, 
        padding: 5 ,
    },
})