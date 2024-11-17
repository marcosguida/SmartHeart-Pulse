import { fonts } from '@/constants/variables'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  input__main: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    color: '#333',
    fontFamily: fonts.notoSans['regular'],
  },
})
