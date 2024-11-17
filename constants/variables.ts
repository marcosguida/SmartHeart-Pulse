// import '../assets/fonts/Poppins/Poppins-Regular.ttf';
// import '../assets/fonts/Poppins/Poppins-Bold.ttf';
// import '../assets/fonts/Poppins/Poppins-Light.ttf';
// import '../assets/fonts/Poppins/Poppins-Medium.ttf';
// import '../assets/fonts/Poppins/Poppins-Italic.ttf';
// import '../assets/fonts/Poppins/Poppins-BoldItalic.ttf';
// import '../assets/fonts/Poppins/Poppins-LightItalic.ttf';
// import '../assets/fonts/Poppins/Poppins-MediumItalic.ttf';
// import '../assets/fonts/Poppins/Poppins-ExtraLight.ttf';
// import '../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf';
// import '../assets/fonts/Poppins/Poppins-Black.ttf';
// import '../assets/fonts/Poppins/Poppins-BlackItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Regular.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Bold.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Light.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Medium.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Italic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-BoldItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-LightItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-MediumItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-ExtraLight.ttf';
// import '../assets/fonts/NotoSans/NotoSans-ExtraLightItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Black.ttf';
// import '../assets/fonts/NotoSans/NotoSans-BlackItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-ExtraBold.ttf';
// import '../assets/fonts/NotoSans/NotoSans-ExtraBoldItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-Thin.ttf';
// import '../assets/fonts/NotoSans/NotoSans-ThinItalic.ttf';
// import '../assets/fonts/NotoSans/NotoSans-SemiBold.ttf';

export const colors = {
  dark: {
    100: '#16151c',
    90: '#16151cc4',
    80: '#16151c80',
    20: '#16151c20',
  },
  gray: {
    100: '#a2a1a8',
    80: '#a2a1a880',
    20: '#a2a1a820',
    10: '#a2a1a810',
    5: '#a2a1a805',
  },
  white: {
    100: '#ffffff',
    80: '#ffffff80',
    20: '#ffffff20',
  },
  light: {
    100: '#d9e1e1',
    80: '#d9e1e180',
    20: '#d9e1e120',
    10: '#d9e1e110',
    5: '#d9e1e105',
  },
  brand: {
    500_5: '#7152f305',
    500_10: '#7152f310',
    500_20: '#7152f320',
    500: '#7152f3',
    800: '#3517b4',
    900: '#250c92',
  },
  yellow: {
    100: '#efbe12',
    5: '#efbe1205',
  },
  green: {
    100: '#3fc28a',
    5: '#3fc28a05',
  },
  red: {
    100: '#bd1c0f',
    5: '#f45b6905',
  },
}

export const spacings = {
  marginSmall: 10,
  paddingSmall: 5,
  borderRadius: 8,
}

export const textStyles = {
  primary: colors.dark[100],
  brand: colors.brand[500],
  inverted: colors.white[100],
  placeholder: colors.gray[100],
  sizes: {
    mini: 10,
    small: 13,
    base: 16,
    large: 20,
    xl: 49,
    '2xl': 61,
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
}

export const backgrounds = {
  brand: colors.brand[500],
  primary: colors.white[100],
  secondary: colors.gray[100],
  inverted: colors.gray[100],
}

export const fonts = {
  primary: 'Poppins-Regular',
  secondary: 'NotoSans-Regular',

  // Poppins Font Variants
  poppins: {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    light: 'Poppins-Light',
    medium: 'Poppins-Medium',
    italic: 'Poppins-Italic',
    boldItalic: 'Poppins-BoldItalic',
    lightItalic: 'Poppins-LightItalic',
    mediumItalic: 'Poppins-MediumItalic',
    extraLight: 'Poppins-ExtraLight',
    extraLightItalic: 'Poppins-ExtraLightItalic',
    black: 'Poppins-Black',
    blackItalic: 'Poppins-BlackItalic',
  },

  // NotoSans Font Variants
  notoSans: {
    regular: 'NotoSans-Regular',
    bold: 'NotoSans-Bold',
    light: 'NotoSans-Light',
    medium: 'NotoSans-Medium',
    italic: 'NotoSans-Italic',
    boldItalic: 'NotoSans-BoldItalic',
    lightItalic: 'NotoSans-LightItalic',
    mediumItalic: 'NotoSans-MediumItalic',
    extraLight: 'NotoSans-ExtraLight',
    extraLightItalic: 'NotoSans-ExtraLightItalic',
    black: 'NotoSans-Black',
    blackItalic: 'NotoSans-BlackItalic',
    extraBold: 'NotoSans-ExtraBold',
    extraBoldItalic: 'NotoSans-ExtraBoldItalic',
    thin: 'NotoSans-Thin',
    thinItalic: 'NotoSans-ThinItalic',
    semiBold: 'NotoSans-SemiBold',
  },
}
