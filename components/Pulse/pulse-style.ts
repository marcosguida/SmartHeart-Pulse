import { colors, fonts } from '@/constants/variables'
import { Dimensions, StyleSheet } from 'react-native'

const size = Dimensions.get('window').width * 0.5

export default StyleSheet.create({
  pulse__main__section: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: colors.red[100],
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulse__text: {
    fontSize: 24,
    color: colors.white[100],
    fontFamily: fonts.poppins['black'],
  },
})
