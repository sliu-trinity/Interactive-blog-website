import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1578995817216'); /* IE9 */
    src: url('./iconfont.eot?t=1578995817216#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1578995817216') format('woff'),
    url('./iconfont.ttf?t=1578995817216') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1578995817216#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;



