import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  useColorScheme
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from '../constants/Color'

 

export default function Dropdown({ data, onChange, placeholder, style }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light


  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState("");
  const buttonRef = useRef(null);
  const [top, setTop] = useState(0);

  const toggleExpanded = () => setExpanded(!expanded);

  const onSelect = (item) => {
    onChange(item);
    setValue(item.label);
    setExpanded(false);
  };

  return (
    <View
      style={style}
      ref={buttonRef}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const finalValue =
          layout.y + layout.height + (Platform.OS === "android" ? -32 : 3);

        setTop(finalValue);
      }}
    >
      <TouchableOpacity
        style={[styles.button, {backgroundColor: theme.uiBackground}]}
        activeOpacity={0.8}
        onPress={toggleExpanded}
      >
        <Text style={[styles.text , {color: theme.text}]}>{value || placeholder}</Text>
        <AntDesign name={expanded ? "up" : "down"} />
      </TouchableOpacity>

      {expanded && (
        <Modal visible transparent>
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View style={styles.backdrop}>
              <View style={[styles.options, { top,  backgroundColor: theme.uiBackground}]}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.value}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.optionItem}
                      onPress={() => onSelect(item)}
                    >
                      <Text style={{color: theme.text}}>{item.label}</Text>
                    </TouchableOpacity>
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  optionItem: {
    height: 40,
    justifyContent: "center",
  },
  separator: {
    height: 4,
  },
  options: {
    position: "absolute",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    maxHeight: 250,
  },
  text: {
    fontSize: 15,
    opacity: 0.8,
  },
  button: {
    height: 50,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
