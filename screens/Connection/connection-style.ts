import { colors, fonts } from '@/constants/variables'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  connection__main__section: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.dark[100],
  },
  connection__main__section__header: {
    width: '100%',
    padding: 30,
    gap: 10,
  },
  connection__main__section__header__status: {
    fontSize: 12,
    color: '#000',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: colors.white[100],
    fontFamily: fonts.notoSans['semiBold'],
  },
  connection__main__section__header__title: {
    fontSize: 24,
    color: colors.white[100],
    fontFamily: fonts.poppins['black'],
  },
  connection__main__section__header__text: {
    fontSize: 14,
    color: colors.white[100],
    fontFamily: fonts.notoSans['semiBold'],
  },
  connection__main__section__form: {
    width: '100%',
    padding: 30,
    paddingTop: 10,
    gap: 20,
  },
})
