import Banner from "./components/Banner";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Banner src="./banner.png" alt="Banner da página inicial." />
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  );
}

export default App;
