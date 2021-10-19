import { FeaturedCollection } from "./components/FeaturedCollection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import MainSection from "./components/MainSection";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <MainSection />
        <FeaturedCollection />
        <Footer />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
