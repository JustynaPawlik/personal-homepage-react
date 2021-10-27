import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
