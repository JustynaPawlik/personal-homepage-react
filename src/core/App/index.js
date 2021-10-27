import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage";
import { theme } from "./theme";
import Container from "../../common/Container";

function App() {
  return (
    <Container>
    <ThemeProvider theme={theme}>
      <Normalize />
    <GlobalStyle />
    <PersonalHomepage />
    </ThemeProvider>
    </Container>
  );
}

export default App;
