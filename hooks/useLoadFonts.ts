import { useFonts } from 'expo-font'

export function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-BoldItalic': require('../assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-LightItalic': require('../assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Poppins-MediumItalic': require('../assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('../assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    'NotoSans-Regular': require('../assets/fonts/NotoSans/NotoSans-Regular.ttf'),
    'NotoSans-Bold': require('../assets/fonts/NotoSans/NotoSans-Bold.ttf'),
    'NotoSans-Light': require('../assets/fonts/NotoSans/NotoSans-Light.ttf'),
    'NotoSans-Medium': require('../assets/fonts/NotoSans/NotoSans-Medium.ttf'),
    'NotoSans-Italic': require('../assets/fonts/NotoSans/NotoSans-Italic.ttf'),
    'NotoSans-BoldItalic': require('../assets/fonts/NotoSans/NotoSans-BoldItalic.ttf'),
    'NotoSans-LightItalic': require('../assets/fonts/NotoSans/NotoSans-LightItalic.ttf'),
    'NotoSans-MediumItalic': require('../assets/fonts/NotoSans/NotoSans-MediumItalic.ttf'),
    'NotoSans-ExtraLight': require('../assets/fonts/NotoSans/NotoSans-ExtraLight.ttf'),
    'NotoSans-ExtraLightItalic': require('../assets/fonts/NotoSans/NotoSans-ExtraLightItalic.ttf'),
    'NotoSans-Black': require('../assets/fonts/NotoSans/NotoSans-Black.ttf'),
    'NotoSans-BlackItalic': require('../assets/fonts/NotoSans/NotoSans-BlackItalic.ttf'),
    'NotoSans-ExtraBold': require('../assets/fonts/NotoSans/NotoSans-ExtraBold.ttf'),
    'NotoSans-ExtraBoldItalic': require('../assets/fonts/NotoSans/NotoSans-ExtraBoldItalic.ttf'),
    'NotoSans-Thin': require('../assets/fonts/NotoSans/NotoSans-Thin.ttf'),
    'NotoSans-ThinItalic': require('../assets/fonts/NotoSans/NotoSans-ThinItalic.ttf'),
    'NotoSans-SemiBold': require('../assets/fonts/NotoSans/NotoSans-SemiBold.ttf'),
  })

  return fontsLoaded
}
