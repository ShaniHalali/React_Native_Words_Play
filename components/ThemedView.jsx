import { View, useColorScheme, StyleSheet,ImageBackground } from 'react-native'
import { Colors } from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import DarkBack from '../assets/image/background_dark.png'
import LightBack from '../assets/image/backgroud_blue_light.png'

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  console.log("Theme color = " + colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light
  const background = colorScheme === 'dark' ? DarkBack : LightBack
  

 return (
     <>
    <ImageBackground
      source={background}
      style={styles.background}
    >
    <SafeAreaView
      style={[{ flex: 1 }, style]}
      {...props}
    >
      {children}
    </SafeAreaView>

    </ImageBackground>

    </>
  )


}

export default ThemedView

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
