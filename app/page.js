import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Footer from "../components/layout/Footer";
import Menu from "../components/home/Menu";
import Soalan from "../components/home/Soalan";



export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Menu />
      <Soalan />
      <Footer />
    </>
  );
}
