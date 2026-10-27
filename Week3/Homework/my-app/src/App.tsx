import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "styled-components";
import router from "./router/Router";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalstyle";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;