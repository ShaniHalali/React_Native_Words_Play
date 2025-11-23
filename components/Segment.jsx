import { Pressable, Text, StyleSheet, useColorScheme } from "react-native";
import { Colors } from '../constants/Color'


const Segment = ({ label, selected, onPress }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.segment,
        selected ? styles.segmentSelected : styles.segmentUnselected && {backgroundColor: theme.uiBackground},
      ]}
    >
      <Text style={selected ? styles.textSelected : styles.textUnselected && {color: theme.text}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  segment: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  segmentSelected: {
    backgroundColor: "#f7a930",
  },
  segmentUnselected: {
    backgroundColor: "#d4d4d4",
  },
  textSelected: {
    color: "white",
    fontWeight: "bold",
  },
  textUnselected: {
    color: "black",
  },
});

export default Segment;
