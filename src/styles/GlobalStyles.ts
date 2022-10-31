import { createGlobalStyle } from 'styled-components'
import  { globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle(globalStyles as any, `
   body{
    background: #fff !important;
    overflow-x: hidden
   }
`)

export default GlobalStyles