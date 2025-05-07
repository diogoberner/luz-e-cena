import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.png" alt="Banner da página inicial." />
      <MovieSection />
      <Banner src="./banner_combo.png" alt="Banner do combo." />
      <Newsletter />
      <Banner src="./tarjeta.png" alt="Tarjeta" />
    </>
  );
}

export default App;
