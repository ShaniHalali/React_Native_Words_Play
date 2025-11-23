import { View, useColorScheme, StyleSheet,ImageBackground } from 'react-native'
import { Colors } from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import DarkBack from '../assets/image/background_dark.png'
import LightBack from '../assets/image/backgroud_blue_light.png'
import LightGameBack from '../assets/image/background_yellow_light.png'
import DarkGameBack from '../assets/image/back_game_dark.png'

  const backgrounds = {
    normal: {
      light: LightBack,
      dark: DarkBack,
    },
    game: {
      light: LightGameBack,
      dark: DarkGameBack,
    },
  };

const ThemedView = ({mode, style, children, ...props }) => {
  const colorScheme = useColorScheme()
  console.log("Theme color = " + colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light
  const background =  backgrounds[mode === "game" ? "game" : "normal"][colorScheme];



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
