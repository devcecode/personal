import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.primaryBackground};
  min-height: 100vh;
}
`