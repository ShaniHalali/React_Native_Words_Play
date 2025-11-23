import { StyleSheet, Platform } from 'react-native';
import React from 'react';
import DropDown from './DropDown';
import ThemedText from './ThemeText';

const fontFamilyPlatform = Platform.OS === "ios" ? "ChalkboardSE-Regular" : "sans-serif-medium";

const aiLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Japanese", value: "ja" },
  { label: "German", value: "de" },
];

const LanguagesDropDown = ({ value, onChange, style }) => {
  return (
    <>
      <ThemedText style={[styles.title, style]}> Learning Language:</ThemedText>

      <DropDown
        style={styles.inputs}
        data={aiLanguages}
        placeholder="Choose language"
        onChange={onChange}
        value={value}       // ← הוספנו את זה
      />
    </>
  );
};

export default LanguagesDropDown;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: fontFamilyPlatform,
    color: "#f7a930",
    alignSelf: "flex-start",
    marginLeft: 35,
  },
  inputs: {
    width: '80%',
    marginBottom: 5,
    alignSelf: "center",
  },
});
