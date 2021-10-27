import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "./features/personalHomepage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
    <GlobalStyle />
    <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
