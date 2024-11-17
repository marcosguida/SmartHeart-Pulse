import { colors, fonts } from '@/constants/variables'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button__main: {
    backgroundColor: colors.white[100],
    borderRadius: 10,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.notoSans['medium'],
  },
})
