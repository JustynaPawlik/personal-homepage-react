import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/personalHomepage";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { themeDark, themeLight } from "./theme";
import Container from "../../common/Container";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
    <Container>
      <Normalize />
    <GlobalStyle />
    <PersonalHomepage />
    </Container>
    </ThemeProvider>
  );
}

export default App;
