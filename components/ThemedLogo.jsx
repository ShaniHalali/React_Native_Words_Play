import { StyleSheet,useColorScheme, Image } from 'react-native'
import LightLogo from '../assets/image/childrenAuth_light.png'
import DarkLogo from '../assets/image/childrenAuth_dark.png'

const ThemedLogo = () => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
  <Image source = {logo} style={styles.logo}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
})