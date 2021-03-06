import React, { useEffect } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle, css } from 'styled-components'
import { getQueryParam, checkSupportedTheme } from '../utils'
import { SUPPORTED_THEMES } from '../constants'
import { useDarkModeManager } from '../contexts/LocalStorage'

export * from './components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#ffffff'
const black = '#000000'

const purple = '#09BE8B'
const gray = 'dadada'
const gradientPurpleTB = 'linear-gradient(to bottom, #09a5be, #9cd03b)'
const gradientPurpleLR = 'linear-gradient(to right, #09a5be, #9cd03b)'
const darkContentBg = '#333333'
const darkSelectBg = '#6a6a6a'

export default function ThemeProvider({ children }) {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  // console.log(darkMode)
  const themeURL = checkSupportedTheme(getQueryParam(window.location, 'theme'))
  const themeToRender = themeURL
    ? themeURL.toUpperCase() === SUPPORTED_THEMES.DARK
      ? true
      : themeURL.toUpperCase() === SUPPORTED_THEMES.LIGHT
      ? false
      : darkMode
    : darkMode
  useEffect(() => {
    toggleDarkMode(themeToRender)
    // toggleDarkMode(false)
  }, [toggleDarkMode, themeToRender])
  // console.log(themeToRender)
  return <StyledComponentsThemeProvider theme={theme(themeToRender)}>{children}</StyledComponentsThemeProvider>
}

const theme = darkMode => ({
  white,
  black,
  purple,
  gray,
  gradientPurpleTB,
  gradientPurpleLR,
  darkContentBg,
  darkSelectBg,

  textColor: darkMode ? '#979dac' : '#00684a',
  textColor1: darkMode ? white : '#00684a',
  textColorBold: darkMode ? white : '#062536',
  selectTextColor: darkMode ? white : '#00684a',
  greyText: darkMode ? white : '#6C7284',

  // for setting css on <html>
  backgroundColor: darkMode ? darkContentBg : white,
  backgroundColorCont: darkMode ? darkContentBg : '#f9fafb',

  contentBg: darkMode ? darkContentBg : white,
  contentShadow: darkMode ? '7px 2px 26px 0 rgba(5, 6, 13, 0.24)' : '7px 2px 26px 0 rgba(0, 0, 0, 0.06)',
  dayOrNight: darkMode ? darkSelectBg : purple,
  bodyBg: darkMode ? '#262626' : '#f9fafb',
  lightPuroleBg: darkMode ? darkSelectBg : 'rgb(246, 244, 255)',

  selectedBg: darkMode ? darkSelectBg : '#ecf6ff',
  selectedHoverBg: darkMode ? '#252b49' : '#deefff',

  selectedBorder: darkMode ? '#6a6a6a' : '#c0d6ea',
  selectedHoverBorder: darkMode ? '#4a5482' : '#4db698',

  selectedBgNo: darkMode ? darkSelectBg : '#f8f8f9',
  selectedHoverBgNo: darkMode ? '#252b49' : '#f2f2f2',

  selectedBorderNo: darkMode ? '#6a6a6a' : '#d9d9e2',
  selectedHoverBorderNo: darkMode ? '#4a5482' : '#9c9cb0',

  moreBtn: darkMode ? '#6a6a6a' : '#f9fafb',
  viewMoreBtn: darkMode ? darkSelectBg : '#f9fafb',

  searchBg: darkMode ? darkSelectBg : white,

  tipContentBg: darkMode ? darkSelectBg : '#ededed',
  dtilContentBg: darkMode ? darkSelectBg : white,

  navBg: darkMode ? '#333333' : '#00684a',
  navBg2: darkMode ? '#6a6a6a' : '#00684a',
  navBg3: darkMode ? '#6a6a6a' : 'rgba(0,0,0,0.05)',
  navColor: darkMode ? '#979dac' : '#062536',

  tabBg: darkMode ? '#6a6a6a' : white,
  tabActiveBg: darkMode ? '#3cda7b' : 'none',
  tabColor: darkMode ? white : '#96989e',
  tabActiveColor: darkMode ? white : '#09BE8B',
  tabBdColor: darkMode ? 'none' : '#09BE8B',

  dtilTxtBg: darkMode ? 'none' : 'rgb(240, 240, 240)',
  dtilTxtBorder: darkMode ? '#5c677d' : 'rgb(218, 218, 218)',

  tipBg: darkMode ? '#6a6a6a' : '#f2edff',
  tipBorder: darkMode ? '#6a6a6a' : '#b398f9',
  tipColor: darkMode ? white : '#09BE8B',

  inputBorder: darkMode ? '#5c677d' : '#062536',
  
  networkBorder: darkMode ? '#5c677d' : '#dadada',

  switchColor: darkMode ? '#00bde3' : '#09BE8B',

  birdgeStateBg: darkMode ? 'rgba(0,0,0,0.6)' : '#fff5e0',
  birdgeStateBorder: darkMode ? 'rgba(0,0,0,0.6)' : '#e3d1aa',
  birdgeStateBg1: darkMode ? 'rgba(0,0,0,0.6)' : '#e2f9e5',
  birdgeStateBorder1: darkMode ? 'rgba(0,0,0,0.6)' : '#a3daab',
  birdgeStateBg2: darkMode ? 'rgba(0,0,0,0.6)' : 'rgb(255,104,113,.2)',
  birdgeStateBorder2: darkMode ? 'rgba(0,0,0,0.6)' : 'rgb(255,104,113)',

  swapBg: darkMode ? 'rgba(255,255,255,0.1)' : '',


  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  inputBackground: darkMode ? '#202124' : white,
  placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
  shadowColor: darkMode ? '#000' : '#2F80ED',

  bgColor: darkMode ? 'rgba(0,0,0,0.1)' : white,
  bgColorLinear: 'linear-gradient(to right, #09a5be, #9cd03b)',

  CommingSoon: darkMode ? 'rgba(0,0,0,0.6)' : '#f5f5f5',

  // grays
  concreteGray: darkMode ? '#6a6a6a' : '#FAFAFA',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  silverGray: darkMode ? '#737373' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? '#C4C4C4' : '#737373',
  mineshaftGray: darkMode ? '#E1E1E1' : '#2B2B2B',
  activeGray: darkMode ? '#6a6a6a' : '#F7F8FA',
  buttonOutlineGrey: darkMode ? '#FAFAFA' : '#F2F2F2',
  tokenRowHover: darkMode ? '#404040' : '#F2F2F2',

  //blacks
  charcoalBlack: darkMode ? '#F2F2F2' : '#404040',
  // blues
  zumthorBlue: darkMode ? '#212529' : '#EBF4FF',
  malibuBlue: darkMode ? '#E67AEF' : '#5CA2FF',
  royalBlue: darkMode ? '#09BE8B' : '#09BE8B',
  loadingBlue: darkMode ? '#e4f0ff' : '#e4f0ff',

  // purples
  wisteriaPurple: '#DC6BE5',
  // reds
  salmonRed: '#FF6871',
  // orange
  pizazzOrange: '#FF8F05',
  // yellows
  warningYellow: '#FFE270',
  // pink
  uniswapPink: '#DC6BE5',
  //green
  connectedGreen: '#27AE60',

  //branded
  metaMaskOrange: '#E8831D',

  //specific
  textHover: darkMode ? theme.uniswapPink : theme.doveGray,

  // connect button when loggedout
  buttonFaded: darkMode ? '#DC6BE5' : '#737373',

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `,
  FlexC: css`
    display: flex;
    justify-content:  center;
    align-items:center;
  `,
  FlexSC: css`
    display: flex;
    justify-content:  flex-start;
    align-items:center;
  `,
  FlexEC: css`
    display: flex;
    justify-content:  flex-end;
    align-items:center;
  `,
  FlexBC: css`
    display: flex;
    justify-content:  space-between;
    align-items:center;
  `
})

// @import url('https://rsms.me/inter/inter.css');
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Manrope');
  html { font-family: 'Manrope', 'Inter'; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Manrope'; }
  }
  *{box-sizing: border-box;}
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;    
  }

  body > div {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

  html {
    font-size: 16px;
    font-variant: none;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bodyBg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  table,thead,tr,th,td {background:none;}

  /* ?????????????????????????????????????????????????????? */
  ::-webkit-scrollbar-track-piece {
    background-color:#f8f8f8;
    }
    /* ?????????????????? */
    ::-webkit-scrollbar {
    width:0px;
    height:0px;
    }
    /* ?????????????????? */
    ::-webkit-scrollbar-thumb {
    background-color:#dddddd;
    background-clip:padding-box;
    min-height:28px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background-color:#bbb;
    }

`
