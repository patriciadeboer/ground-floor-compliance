import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppWrapper = styled.div`
  min-height: 100vh;          /* fill the viewport */
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;                    /* take remaining space */
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
            <Header />
            <Main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </Main>
            <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
