import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
