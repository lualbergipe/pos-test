import { DefaultTheme, DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    primary: '#27F5D1',
    secondary: '#3D3D3D',
    btnPrimary: '#27F5D1',
    background: '#ffffff',
    backgroundCard: '#F2F4F5',
    text: '#3F3F40',
    textInvert: '#ffffff',
    iconColor: '#142032',
    botonesFiltros: '#E1E4EA',
    barraLateral: '#00D5A4' , 
    textBlack: '#000000',
    textWhite: '#ffffff',
    primarySeewt: '#D2FDF0',
    skuCard: '#007C66',
    btnSecoundary: '#EEF0FA',
    backgroundCard: '#EFFDF9',
    borderButoon: '#C9CDE5',
    textColor: '#004739',
    baseAuxiliar: '#007C66',
    backgroundColor: '#D2FDF0',
    placeholder: '#AFB3C7',                  
    bgTertiary: '#EEF0FA',
    textLink: '#0E4BE8'  
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme?.colors,
    primary: '#27F5D1',
    secondary: '#3E3E3E',
    btnPrimary: '#27F5D1',
    background: '#101115',
    backgroundCard: '#25354d',
    text: '#ffffff',
    textInvert: '#000000', 
    iconColor: '#FFFFFF',
    botonesFiltros: '#E1E4EA',
    barraLateral: '#142032' ,
    textBlack: '#000000',
    textWhite: '#ffffff',
    primarySeewt: '#0D2E26',
    skuCard: '#007C66',
    btnSecoundary: '#212229',
    backgroundCard: '#101C19',
    borderButoon: '#444756',
    textColor: '#A9F1DE',
    baseAuxiliar: '#00DAB7',
    backgroundColor: '#101115',  
    placeholder: '#AFB3C7',
    bgTertiary: '#2F303B',
    textLink: '#8EADE9'         
  },
};

export { lightTheme, darkTheme };
